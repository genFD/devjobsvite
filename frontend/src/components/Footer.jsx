import React from 'react';
import { LoadMoreButton } from '../components';
import { useGlobalContext } from '../context/context.jsx';

const Footer = () => {
  const { query, valid } = useGlobalContext();
  return (
    <footer className="main-footer flex justify-center items-center ">
      {/* {!valid && !query ? null : <LoadMoreButton />} */}
      <LoadMoreButton />
    </footer>
  );
};

export default Footer;
