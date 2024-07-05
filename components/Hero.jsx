"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Marquee from './Marquee';
import { League_Spartan } from 'next/font/google';

const spartan = League_Spartan({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Hero = () => {
  // useEffect(() => {
  //   // Animation timeline using GSAP
  //   const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

  //   // Targeting each letter span inside h1
  //   const spans = document.querySelectorAll('.hero-section h1 span');

  //   // Initial position and opacity settings
  //   gsap.set(spans, { opacity: 0, y: 100 });

  //   // Animation sequence
  //   tl.staggerTo(spans, 0.6, { opacity: 1, y: 0, rotation: 360, scale: 1.2 }, 0.1) // Stagger for each span
  //     .to(spans, { rotation: 0, scale: 1, ease: "elastic.out(1, 0.3)", stagger: 0.1 }) // Reset animation

  // }, []);

  return (
    <div className={`hero-section container mx-auto ${spartan.className} py-[100px] border-b border-[#484E53]`}>
      {/* <div className='text-white text-center m-auto text-[96px] mt-[195px]'>
        <h1 className='opacity-1'><span>R</span><span>I</span><span>Z</span><span>W</span><span>A</span><span>A</span><span>N</span> <span>A</span><span>N</span><span>S</span><span>A</span><span>R</span><span>I</span></h1>
      </div>
      <div className='text-white text-center m-auto text-[32px] leading-[0px] pb-[335px] tracking-[6px]'>
        <p>FULL STACK DEVELOPER</p>
      </div> */}

      {/* Hero Text */}
      <div className='flex flex-col justify-center items-center'>
      <div className='text-[75px] leading-[1] text-white flex flex-col items-center justify-center'>
        <div className=''>
          <h1 className=''>RIZWAAN ANSARI</h1>
        </div>
        <div className=''>
        {/* <h2 className=''>ANSARI</h2> */}
        </div>
        <div className=''>
          <h2>FULL <span className='text-purple-500'>STACK</span></h2>
        </div>
        <div className=''>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">DEVELOPER</h2>
        </div>
      </div>
      <div className='mt-[40px]'>
        <a href="#" className='px-8 py-3 rounded-[50px] text-white text-[16px] border border-white'>Say hi👋</a>
      </div>
      </div>
      
      <div className='pt-[64px]'>
      <div className='marquee-animation text-white text-[4rem] overflow-x-auto whitespace-nowrap'>
        <div className='content inline-block whitespace-nowrap'>
          <p className='inline-block'>BUILDING WEBSITES PRODUCTS AND <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600'>EXPERIENCES</span>&nbsp; </p>
        </div>
        <div className='content inline-block whitespace-nowrap'>
        <p className='inline-block'>BUILDING WEBSITES PRODUCTS AND <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600'>EXPERIENCES</span>&nbsp; </p>
        </div>
        {/* <Marquee /> */}
      </div>
      <div className='marquee-animation2 text-white text-[4rem] overflow-x-auto whitespace-nowrap'>
        <div className='content inline-block whitespace-nowrap'>
          <p className='inline-block'>REACT JS NEXT JS NODE JS <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600'>PHP DOCKER WORDPRESS</span>&nbsp; </p>
        </div>
        <div className='content inline-block whitespace-nowrap'>
        <p className='inline-block'>REACT JS NEXT JS NODE JS <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600'>PHP DOCKER WORDPRESS</span>&nbsp; </p>
        </div>
        {/* <Marquee /> */}
      </div>
      </div>
    </div>
  );
};

export default Hero;
