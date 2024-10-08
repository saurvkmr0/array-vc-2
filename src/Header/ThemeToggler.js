import React from 'react';
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from './ThemeContext';

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-0 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`grid place-content-center transition-colors rounded-full md:rounded-2xl ${
        theme === "light" ? "bg-white" : "bg-slate-900"
      }`}
    >
      <SliderToggle selected={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

const SliderToggle = ({ selected, toggleTheme }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => toggleTheme('light')}
      >
        <FiMoon className="relative z-10 text-base md:text-sm" />
        <span className="relative z-10 hidden md:block">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => toggleTheme('dark')}
      >
        <FiSun className="relative z-10 text-base md:text-sm" />
        <span className="relative z-10 hidden md:block">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default ThemeToggler;
