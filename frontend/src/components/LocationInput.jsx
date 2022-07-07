import React from 'react';
import { useGlobalContext } from '../context/context.jsx';

const LocationInput = () => {
  const { location, setLocation, clearInput } = useGlobalContext();
  return (
    <div className="basis-1/3 relative border-l border-r dark:border-gray-700">
      <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4  h-full cursor-pointer">
        <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
            fill="#5964E0"
            fillRule="nonzero"
          />
        </svg>
      </div>
      <input
        id="location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className="focus:outline-none caret-violet text-19202D dark:text-white dark:bg-19202D font-normal w-full h-full flex items-center tablet:px-10 desktop:px-12 text-body cursor-pointer"
        placeholder="Filter by location…"
      />
      {location && (
        <div>
          <svg
            onClick={clearInput}
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Close"
            className="icon icon-tabler icon-tabler-x absolute top-7 right-4"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#6E8098"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </div>
      )}
    </div>
  );
};

export default LocationInput;
