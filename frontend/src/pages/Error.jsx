import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex errorpage items-center flex-col justify-center laptop:flex-row py-28 px-6 tablet:px-24 tablet:py-20 laptop:py-32 gap-16 laptop:gap-28">
      <div className="w-full laptop:w-1/2">
        <h1 className="py-4 text-3xl laptop:text-4xl font-extrabold dark:text-white text-19202D">
          Looks like you have found the doorway to the great nothing
        </h1>
        <p className="py-4 text-base dark:text-white text-19202D">
          The content you’re looking for doesn’t exist. Either it was removed,
          or you mistyped the link.
        </p>
        <p className="py-2 text-base dark:text-white text-19202D">
          Sorry about that! Please visit our hompage to get where you need to
          go.
        </p>
        <Link to="/">
          <button className="w-full laptop:w-auto my-4 border rounded-md px-16 py-5 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
            Go back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
