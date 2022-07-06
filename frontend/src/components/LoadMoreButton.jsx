import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/context.jsx';
import useSearch from '../hooks/useSearch';

const LoadMoreButton = () => {
  const { handleLoadMore, hideLoadmore, query, valid } = useGlobalContext();
  return (
    <button
      onClick={handleLoadMore}
      // disabled={!valid}
      className="w-141 h-12 bg-violet rounded-md grid place-items-center font-bold text-white text-body2 transition-colors duration-200 cursor-pointer hover:bg-light-violet disabled:bg-slate-500 "
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
