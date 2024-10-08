import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

const MenuToggle = ({ isMenuOpen, toggleMenu }) => (
  <button onClick={toggleMenu} aria-label="Toggle menu">
    {isMenuOpen ? (
      <IoCloseOutline className="text-customBlack text-3xl md:text-2xl" />
    ) : (
      <RxHamburgerMenu className="text-customBlack text-3xl md:text-2xl" />
    )}
  </button>
);

export default MenuToggle;
