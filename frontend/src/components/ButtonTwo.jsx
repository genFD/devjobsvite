import React from 'react';

const ButtonTwo = ({ children }) => {
  return (
    <button className=" w-141 h-12 bg-body-bg rounded-sm grid place-items-center font-bold text-violet text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet ">
      {children}
    </button>
  );
};

export default ButtonTwo;
