"use client"

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const HireMe = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(".top-text", {
            y: -200,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".hire-page",
                start: "top 30%",
                end: "top 29%",     
                scrub: 2,
                markers: true
            }
        })
        tl.fromTo(".top-text2", {
            y: -200,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".hire-page",
                start: "top 20%",
                end: "top 19%",     
                scrub: 2,
                markers: true
            }
        })

    }, [])
  return (
    <div className="hire-page w-full h-full py-[24px] overflow-x-hidden">
      <div className="hire-text text-white">
        <h2 className="top-text overflow-y-hidden text-[16vw] text-nowrap uppercase font-bold leading-normal">Why <span>hire</span></h2>
        <h2 className="top-text2 text-[16vw] overflow-hidden text-nowrap uppercase font-bold"> Me?</h2>
      </div>
    </div>
  );
};

export default HireMe;
