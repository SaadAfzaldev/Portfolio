import React from 'react'
import HeroContent from '../sub/HeroContent';

function Hero() {
  return (
      <div className='relative flex flex-col h-auto md:h-full w-full'>
          <div className='relative z-[2]'> 
              <HeroContent/>
          </div>
      </div>
  )
}

export default Hero;