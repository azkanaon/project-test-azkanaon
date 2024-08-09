import { useState } from "react";
import PropTypes from "prop-types";

import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const CustomDropdown = ({ label, getValue }) => {
  const [isClick, setIsClick] = useState(false);
  const [a, setA] = useState(0);
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setA(selectedValue);
    if (getValue) {
      getValue(selectedValue);
    }
  };

  return (
    <div
      className="relative inline-block w-32"
      onClick={() => {
        setIsClick(!isClick);
      }}
    >
      <select
        className="appearance-none w-full px-4 py-[2px] border border-gray-300 rounded-full text-gray-700 bg-white focus:outline-none"
        value={a}
        onChange={handleChange}
      >
        {label.map((lab) => (
          <option key={lab.value} value={lab.value}>
            {lab.name}
          </option>
        ))}
      </select>
      {/* Custom Arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        {!isClick ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
    </div>
  );
};

CustomDropdown.propTypes = {
  label: PropTypes.array,
  getValue: PropTypes.func,
};

export default CustomDropdown;
