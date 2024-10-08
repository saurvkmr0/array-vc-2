import React from 'react';
import logo from '../assets/img/logo/logo.png';
import { useTheme } from './ThemeContext';

const Logo = () => {
  const { theme } = useTheme();
  return (
    <div className={`text-customBlack text-xl font-bold ${theme==='dark'?'invert':'invert-0'}`}>
      <img src={logo} className="h-10 lg:h-12 invert" alt="Logo" />
    </div>
  );
}


export default Logo;
