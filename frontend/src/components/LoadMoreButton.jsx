import React, { useEffect, useState } from 'react';
import useSearch from '../hooks/useSearch';

const LoadMoreButton = () => {
  const { getallJobs } = useSearch();
  return (
    <button
      onClick={getallJobs}
      className="w-141 h-12 bg-violet rounded-md grid place-items-center font-bold text-white text-body2 transition-colors duration-200 cursor-pointer hover:bg-light-violet "
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
