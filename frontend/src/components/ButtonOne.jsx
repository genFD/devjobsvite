import React from 'react';

const ButtonOne = ({ children }) => {
  return (
    <button className="w-141 h-12 bg-violet rounded-sm grid place-items-center font-bold text-white text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet ">
      {children}
    </button>
  );
};

export default ButtonOne;
