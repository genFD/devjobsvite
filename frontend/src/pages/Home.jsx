import React, { useEffect, useState } from 'react';
import ToggleTheme from '../components/ToggleTheme.jsx';
function Home() {
  return (
    <div className="dark:bg-very-dark-blue dark:text-white text-very-dark-blue flex justify-center items-center min-h-screen transition duration-700 ">
      <ToggleTheme />
    </div>
  );
}

export default Home;
