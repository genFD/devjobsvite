import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/context.jsx';

const LoadMoreButton = () => {
  const { handleLoadMore, results } = useGlobalContext();
  return (
    <button
      onClick={handleLoadMore}
      disabled={results.length === 15}
      className="w-141 h-12 bg-violet rounded-md grid place-items-center font-bold text-white text-body2 transition-colors duration-200 cursor-pointer hover:bg-light-violet disabled:bg-slate-500 "
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
