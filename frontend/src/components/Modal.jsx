import React from 'react';

const Modal = () => {
  return (
    <div className="modal flex justify-center mt-4 modal-container">
      <div className=" w-327 h-217 bg-white dark:bg-very-dark-blue py-6 rounded-md">
        <div className="flex justify-center items-center border-b border-b-grey border-opacity-100">
          <div className="pl-6">
            <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                fill="#5964E0"
                fillRule="nonzero"
              />
            </svg>
          </div>

          <input
            className="w-full focus:outline-none px-4 py-3 text-heading-4 leading-none text-very-dark-blue dark:text-white bg-transparent placeholder-light-grey dark:placeholder-white"
            placeholder="Enter your email"
          />
        </div>
        <div className="pl-6">
          <div className="py-4 flex items-center">
            <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                type="checkbox"
                className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
              />
              <div className="check-icon hidden bg-violet text-white rounded-sm">
                <svg
                  className="icon icon-tabler icon-tabler-check"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
            <p className="ml-4 text-body text-very-dark-blue dark:text-white font-bold">
              Full Time Only
            </p>
          </div>
          <style>
            {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
          </style>
        </div>
        <div className="mt-6 flex justify-center">
          <button className=" w-279 h-48 bg-violet rounded-md grid place-items-center font-bold text-white text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
