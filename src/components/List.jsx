import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import CustomDropdown from "./CustomDropdown";
import Pagination from "./Pagination";

const List = () => {
  // data page
  const labelPage = [
    { value: 10, name: 10 },
    { value: 20, name: 20 },
    { value: 50, name: 50 },
  ];

  // data sort
  const labelSort = [
    { value: "-published_at", name: "Newest" },
    { value: "published_at", name: "Oldest" },
  ];

  // Mengambil nilai dari local storage jika ada, atau set ke default
  const getInitialPage = () => Number(localStorage.getItem("currentPage")) || 1;
  const getInitialPageSize = () =>
    Number(localStorage.getItem("pageSize")) || 10;
  const getInitialSort = () => localStorage.getItem("sort") || "-published_at";

  const [getLabelDataPage, setGetLabelDataPage] = useState(getInitialPageSize);
  const [getLabelDataSort, setGetLabelDataSort] = useState(getInitialSort);
  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Mengambil data dari API
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API terupdate setiap kali ada perubahan pada sort, pagination atau size page
        const response = await axios.get(
          `/api/ideas?page[number]=${currentPage}&page[size]=${getLabelDataPage}&append[]=small_image&append[]=medium_image&sort=${getLabelDataSort}`
        );
        setData(response.data);

        // Menyimpan state saat ini ke local storage
        localStorage.setItem("currentPage", currentPage);
        localStorage.setItem("pageSize", getLabelDataPage);
        localStorage.setItem("sort", getLabelDataSort);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [getLabelDataPage, getLabelDataSort, currentPage]);

  // Update state saat memilih show per page
  const handleGetLabelDataPage = (valueLabel) => {
    setGetLabelDataPage(valueLabel);
    setCurrentPage(1);
  };

  // Update state saat memilih sort
  const handleGetLabelDataSort = (valueLabel) => {
    setGetLabelDataSort(valueLabel);
    setCurrentPage(1);
  };

  // Mengubah page berdasarkan component Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-9/12 mx-auto mt-12 ">
      {/* Start Filtering */}
      <div className="flex justify-between">
        <div className="w-3/5">
          <p>
            Showing {data?.meta?.from}-{data?.meta?.to} of {data?.meta?.total}
          </p>
        </div>
        <div className="flex justify-between w-2/5">
          <div className="flex items-center">
            <p className="mr-3">Show per page: </p>
            <CustomDropdown
              label={labelPage}
              getValue={handleGetLabelDataPage}
            />
          </div>
          <div className="flex items-center">
            <p className="mr-3">Sort by: </p>
            <CustomDropdown
              label={labelSort}
              getValue={handleGetLabelDataSort}
            />
          </div>
        </div>
      </div>
      {/* End Filtering */}

      {/* Start Card */}
      <div className=" mt-6 w-full">
        <div className="grid grid-cols-4 gap-y-8 gap-x-12 justify-center">
          {data?.data?.length > 0 &&
            data.data.map((item, i) => (
              <div key={i} className="w-full">
                <Card item={item} />
              </div>
            ))}
        </div>
      </div>
      {/* End Card */}

      {/* Start Pagination */}
      <div className="w-full flex justify-center mt-6 ">
        <Pagination paginate={paginate} data={data.meta} />
      </div>
      {/* End Pagination */}
    </div>
  );
};

export default List;
