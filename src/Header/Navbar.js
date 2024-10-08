import React, { useState } from 'react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import NavLinks from './NavLinks';
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkArr = ["HOME", "ABOUT", "PORTFOLIO","TEAM", "RESOURCES", "CONTACT"];


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent dark:text-white text-customBlack mx-4 md:mx-12 py-4">
      <div className="space-x-8">
        <div className="w-full flex items-center justify-between">
          <Logo />

          <div className="md:hidden flex items-center space-x-2">
            <MenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>

          <NavLinks isMenuOpen={isMenuOpen} navLinkArr={navLinkArr} />
          <ThemeToggler/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
