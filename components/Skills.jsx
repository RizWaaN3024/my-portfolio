"use client"
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
    
    const skillAnimation = () => {
        gsap.fromTo(".skill-title", {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.2,
            scrollTrigger: {
                trigger: ".skill-title",
                start: "top 47%",
                end: "top 49%",     
                scrub: 2,
                markers: true
            }
        });
    }
    useEffect(() => {
        skillAnimation(); // Call animation function inside useEffect
    }, []);
  return (
    <div className='container mx-auto py-[40px]'>
      <div>
        <h2 className='skill-title text-[94px] text-center'>My Skills</h2>
      </div>
      <div>
        <div className='pt-[42px]'>
            <p className='text-[42px] font-bold'>Why hire me?</p>
        </div>
        <div>
            <p className='text-[32px]'>I'm passionate about crafting exceptional digital experiences and bringing creative ideas to life. My approach is fueled by a deep passion for innovation and a commitment to delivering excellence in every project. I embrace the learning process with enthusiasm, diving into documentation to ensure thorough understanding and meticulous execution.</p>
        </div>
        <div className='github-section'></div>
      </div>
    </div>
  )
}

export default Skills
