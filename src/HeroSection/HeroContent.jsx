import React from 'react'
import HeroText from './HeroText'
import './HeroContent.css';

const HeroContent = () => {
  return (
    <div className='m-4 md:mx-12 h-screen'>
        <div className="floating-image grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <HeroText />
            <img
                className="w-full h-auto object-cover p-10"
                src="https://themesflat.co/risebothtml/assets/images/slider/Furore.png"
                alt="Hero"
            />
        </div>
    </div>
  )
}

export default HeroContent