import React, { useEffect, useState } from 'react';

const changingText = ['Cybersecurity', 'Future', 'B2B SaaS', 'Ed Tech', 'AI'];

const HeroText = () => {
  const [currentText, setCurrentText] = useState(changingText[0]);
  const [fadeOut, setFadeOut] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cycleText = () => {
      setFadeOut(true); // Start fade-out

      setTimeout(() => {
        // Change text after fading out
        setIndex((prevIndex) => (prevIndex + 1) % changingText.length);
        setCurrentText(changingText[(index + 1) % changingText.length]);
        setFadeOut(false); // Start fade-in
      }, 500); // Match this time with the CSS transition duration
    };

    const interval = setInterval(cycleText, 2000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="text-bgDarkPrime dark:text-white text-4xl md:text-8xl">
      <div className="font-bold">
        <p className="">Empowering</p>
        <p className={`transition-opacity duration-500 text-highlight ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            {currentText}
        </p>
        <p className="">Founders</p>
      </div>
      <p className='text-xl hover:text-highlight py-4'>Visions Needs <br/> Liquidity</p>
    </div>
  );
};

export default HeroText;
