import React from 'react';

const NavLinks = ({ isMenuOpen, navLinkArr }) => (
  <ul
    className={`md:flex md:space-x-4 lg:space-x-8 absolute md:static bg-customWhite md:bg-transparent w-full left-0 md:w-auto transition-transform transform ${
      isMenuOpen ? 'top-20' : '-top-full'
    }`}
  >
    {navLinkArr.map((link, index) => (
      <li key={index} className="md:my-0 my-2 text-center relative group">
        <a
          href={`#${link.toLowerCase()}`}
          className="relative z-10 inline-block hover:text-highlight"
        >
          {link}
        </a>
        {/* Brackets */}
        <span className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-highlight">
          [
        </span>
        <span className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-highlight">
          ]
        </span>
      </li>
    ))}
  </ul>
);

export default NavLinks;
