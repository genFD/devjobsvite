import React from 'react';

const FormRow = ({ type, name, id, stateValue, handleChange, labelText }) => {
  return (
    <div className="flex flex-col mt-5">
      <label
        htmlFor={name}
        className="text-heading-3 font-semibold text-white leading-tight"
      >
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        value={stateValue}
        id={id}
        onChange={handleChange}
        required
        className="h-10 px-2 caret-5964E0 bg-body-bg w-full rounded mt-2 text-19202D focus:outline-none focus:border-2 focus:border-5964E0 border shadow invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
    </div>
  );
};

export default FormRow;
