import React from 'react';
import ToggleTheme from './ToggleTheme.jsx';

const Navbar = () => {
  return (
    <nav className="nav relative">
      <picture className="pattern-header">
        <source
          srcSet="/assets/desktop/bg-pattern-header.svg"
          media="(min-width:1024px)"
        />
        <source
          srcSet="/assets/tablet/bg-pattern-header.svg"
          media="(min-width:768px)"
        />
        <img src="/assets/mobile/bg-pattern-header.svg" alt="" />
      </picture>
      <div className="absolute top-8 flex items-center justify-between w-full px-6 tablet:px-10 laptop:px-24 desktop:px-156 border-2">
        <img src="/assets/desktop/logo.svg" className="w-115 h-8" alt="" />
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
