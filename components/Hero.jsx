"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    // Animation timeline using GSAP
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

    // Targeting each letter span inside h1
    const spans = document.querySelectorAll('.hero-section h1 span');

    // Initial position and opacity settings
    gsap.set(spans, { opacity: 0, y: 100 });

    // Animation sequence
    tl.staggerTo(spans, 0.6, { opacity: 1, y: 0, rotation: 360, scale: 1.2 }, 0.1) // Stagger for each span
      .to(spans, { rotation: 0, scale: 1, ease: "elastic.out(1, 0.3)", stagger: 0.1 }) // Reset animation

      // marquee animation
      const marqueeText = document.querySelector(".marquee-animation p");
      const marqueeAnimation = gsap.to(marqueeText, {
        xPercent: 100,
        repeat: -1,
        duration: 5,
        ease: "linear"
      })

  }, []);

  return (
    <div className='hero-section container mx-auto relative'>
      <div className='text-white text-center m-auto text-[96px] mt-[195px]'>
        <h1 className='opacity-1'><span>R</span><span>I</span><span>Z</span><span>W</span><span>A</span><span>A</span><span>N</span> <span>A</span><span>N</span><span>S</span><span>A</span><span>R</span><span>I</span></h1>
      </div>
      <div className='text-white text-center m-auto text-[32px] leading-[0px] pb-[335px] tracking-[6px]'>
        <p>FULL STACK DEVELOPER</p>
      </div>
      <div className='marquee-animation text-white text-[2rem] overflow-hidden whitespace-nowrap absolute bottom-20 right-0 transform -rotate-12'>
      <p className='inline-block'>NEXT JS REACT JS NODE JS PHP DOCKER &nbsp;</p>
      </div>
    </div>
  );
};

export default Hero;
