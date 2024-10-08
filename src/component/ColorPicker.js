import React, { useState, useEffect } from 'react';

const ColorPicker = () => {
  const [highlightColor, setHighlightColor] = useState('#008f11'); // Default highlight color

  // Function to handle color changes
  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setHighlightColor(newColor);
    document.documentElement.style.setProperty('--highlight-color', newColor); // Update CSS variable
  };

  // Optional: Effect to set the CSS variable on mount
  useEffect(() => {
    document.documentElement.style.setProperty('--highlight-color', highlightColor);
  }, [highlightColor]);

  return (
    <div className="flex flex-col items-center w-fit rounded-full bg-highlight ">
      <input
        type="color"
        value={highlightColor}
        onChange={handleColorChange}
        className="w-10 h-10 rounded-full bg-highlight border-0 focus:outline-none"
      />
      {/* <div
        className="mt-4 p-4 text-white rounded"
        style={{ backgroundColor: highlightColor }} // For visual feedback
      >
        This div's background color changes!
      </div> */}
    </div>
  );
};

export default ColorPicker;
