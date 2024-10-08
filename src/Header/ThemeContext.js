import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider component to manage the global theme state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check and set the theme from localStorage if it exists
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
    document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
