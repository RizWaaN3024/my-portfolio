"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
 // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className=''>
      <div className='text-white text-center m-auto text-[96px] mt-[195px]'>
        <h1>RIZWAAN ANSARI</h1>
      </div>
      <div className='text-white text-center m-auto text-[32px] leading-[0px] pb-[335px] tracking-[6px]'>
        FULL STACK DEVELOPER
      </div>
      {/* Nav Menu */}
    </div>
  );
};

export default Hero;
