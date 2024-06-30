"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {

    useEffect(() => {
        gsap.fromTo(".about-title, .about-desc", {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.2,
            scrollTrigger: {
                trigger: ".about-title",
                start: "top 47%",
                end: "top 46%",     
                scrub: 2,
                // markers: true
            }
        });
        gsap.fromTo(".about-title2, .about-desc2", {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.2,
            scrollTrigger: {
                trigger: ".about-title2",
                start: "top 47%",
                end: "top 46%",     
                scrub: 2,
                // markers: true
            }
        });
        gsap.fromTo(".about-title3, .about-desc3", {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.2,
            scrollTrigger: {
                trigger: ".about-title3",
                start: "top 30%",
                end: "top 29%",     
                scrub: 2,
                // markers: true
            }
        });
    }, []);


  return (
    <div className="container mx-auto about-section relative py-[40px]">
      <div className="text-center mt-[60px] border-b-2 border-black">
        <h2 className="text-[94px] font-bold about-title">About Me</h2>
      </div>
      <div className="pt-[24px] text-[36px] text-center overflow-hidden">
        <p className=" about-desc overflow-hidden">
          Hey there!!👋 I'm Rizwaan, your friendly neighbourhood Full-Stack Developer,</p>
          <p className="about-desc overflow-hidden">coding my way through the web like Spider-Man swings
          through the city.🕸️</p>
           
        
      </div>
      <div className="absolute right-0 z-[-1]">
        <video src="/RJ-BALL-BLUE-ORANGE-scaled.webm" autoPlay loop muted></video>
      </div>

      <div className=" pt-[44px] overflow-hidden">
        <h3 className="text-[42px] font-bold text-center border-b-2 border-black about-title2">The Short Story</h3>
        <p className="text-[36px] text-center pt-[24px] overflow-hidden about-desc2">
          By day, I'm a mild-mannered coder, crafting seamless user experiences
          and robust </p> <p className="text-[36px] text-center overflow-hidden about-desc2">back-end systems. By night, I'm...well, still a coder. But
          with more snacks and bad puns.</p>
      </div>
      <div className=" pt-[44px] overflow-hidden pb-[40px]">
        <h3 className="text-[42px] font-bold text-center border-b-2 border-black about-title3">The Origin Story</h3>
        <p className="text-[36px] text-center pt-[24px] overflow-hidden about-desc3">
          Once upon a time, in a land filled with syntax errors and 404 pages, I
          embarked on a quest to master the mystical arts of HTML, CSS and
          Javascript. After surviving countless caffeine-fueled nights and
          heroic battles against bugs, I emerged as a Full-Stack Developer,
          ready to save the digital world from outdated designs and spaghetti
          code.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
