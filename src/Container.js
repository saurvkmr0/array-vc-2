import React from 'react'
import Navbar from './Header/Navbar'
import heroBg from './assets/img/banner/banner-bg.png'
import { useTheme } from './Header/ThemeContext';
import ColorPicker from './component/ColorPicker';
import './style.css'; 
import HeroContent from './HeroSection/HeroContent';

const Container = () => {
  const { theme } = useTheme();
  return (
    <div className="">
      <div className={`z-[-99] absolute bg-cover bg-center h-screen w-full ${theme==='dark'?'invert-0':'invert-85'}`} style={{ backgroundImage: `url(${heroBg})` }} >
      </div>
        <Navbar />
        <HeroContent />
        
        
        
        <div className="fixed bottom-8 right-8"><ColorPicker /></div>
    </div>
  )
}

export default Container