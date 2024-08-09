import PropTypes from "prop-types";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ data, paginate }) => {
  const pageNumbers = [];

  // mengubah dari angka menjadi sebuah array agar bisa dilooping
  for (let i = 1; i <= data?.last_page; i++) {
    pageNumbers.push(i);
  }

  // menampilkan 5 pagination
  const startPage = Math.max(1, data?.current_page - 2);
  const endPage = Math.min(data?.last_page, data?.current_page + 2);
  const visiblePages = pageNumbers.slice(startPage - 1, endPage);

  const handlePageChange = (pageNumber) => {
    paginate(pageNumber);
  };

  const handlePrevious = () => {
    if (data?.current_page > 1) {
      handlePageChange(data?.current_page - 1);
    }
  };

  const handleNext = () => {
    if (data?.current_page < data?.last_page) {
      handlePageChange(data?.current_page + 1);
    }
  };

  const handleGoToFirstPage = () => {
    handlePageChange(1);
  };

  const handleGoToLastPage = () => {
    handlePageChange(data?.last_page);
  };

  return (
    <div>
      <ul className="inline-flex">
        <li>
          <button
            onClick={handleGoToFirstPage}
            disabled={data?.current_page === 1}
            className={`px-2 py-2 rounded-md bg-white hover:bg-gray-200 ${
              data?.current_page === 1 ? "cursor-not-allowed opacity-30" : ""
            }`}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
        </li>
        <li>
          <button
            onClick={handlePrevious}
            disabled={data?.current_page === 1}
            className={`px-2 py-2  rounded-md bg-white hover:bg-gray-200 ${
              data?.current_page === 1 ? "cursor-not-allowed opacity-30" : ""
            }`}
          >
            <IoIosArrowBack />
          </button>
        </li>
        {visiblePages.map((number) => (
          <li key={number} className="mx-1">
            <button
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1 font-semibold rounded-md bg-white hover:bg-orange-400 hover:text-white ${
                number == data?.current_page ? "bg-orange-500 text-white " : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={handleNext}
            disabled={data?.current_page === data?.last_page}
            className={`px-2 py-2  rounded-md bg-white hover:bg-gray-200 ${
              data?.current_page === data?.last_page
                ? "cursor-not-allowed opacity-30"
                : ""
            }`}
          >
            <IoIosArrowForward />
          </button>
        </li>

        <li>
          <button
            onClick={handleGoToLastPage}
            disabled={data?.current_page === data?.last_page}
            className={`px-2 py-2  rounded-md bg-white hover:bg-gray-200 ${
              data?.current_page === data?.last_page
                ? "cursor-not-allowed opacity-30"
                : ""
            }`}
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  data: PropTypes.object,
  paginate: PropTypes.func,
};

export default Pagination;
