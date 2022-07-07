import React from 'react';
import { FillingBottle } from 'react-cssfx-loading';
const Loading = () => {
  return (
    <>
      <div className="loading-container my-4 text-white dark:bg-midnight flex justify-center items-center">
        <FillingBottle
          color="#5964E0"
          width="100px"
          height="100px"
          duration="1s"
        />
      </div>
    </>
  );
};

export default Loading;
