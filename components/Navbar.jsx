"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import {FiGithub} from 'react-icons/fi'
import { CiMail } from 'react-icons/ci'
import { RiLinkedinFill } from 'react-icons/ri'


const links = [
  {path: '/', name:'Home'},
  {path: '/projects', name:'Projects'},
  {path: '/about', name:'About'},
  {path: '/contact', name:'Contact'}
]
const Navbar = () => {

    // useEffect(() => {
    //   gsap.from(".logo", {
    //     y: -200,
    //     duration: 1,
    //     delay: 1
    //   })
    // }, [])

    // CustomCursor
    useEffect(() => {
      const customCursor = () => {
        const cursor = document.querySelector(".custom-cursor");
        const navMenu = document.querySelector(".nav-menu");
  
        navMenu.addEventListener("mousemove", (e) => {
          gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            ease: "power2.out", // Optional: Specify animation ease
          });
        });
      };
  
      customCursor();
      // navLink animation
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
          gsap.to(link, {
            x: 60,
            scale: 1.4,
            duration: 0.2,
            ease: "power2.out"
          })
        })
        link.addEventListener("mouseout", () => {
          gsap.to(link, {
            x: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      })
  
      // Cleanup function
      return () => {
        const navMenu = document.querySelector(".nav-menu");
        navMenu.removeEventListener("mousemove", customCursor);

        navLinks.forEach((link) => {
          link.removeEventListener("mouseover", null);
          link.removeEventListener("mouseout", null);
        })
      };
    }, []);
    

    const handleClick = () => {
      const tl = gsap.timeline();
      tl.to(".nav-menu", {
        top:0,
        bottom: 0,
        duration: 0.5,
        ease: "power2.in",
      })
      gsap.from(".nav-menu", {
        duration: 1,
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        ease: "power1.inOut"
      
      })
      tl.from(".nav-link, .nav-text, .nav-icons", {
        y: -100,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1
      })
      tl.from(".menu-text", {
        x: -100,
        opacity: 0,
        duration: 0.2,
        stagger: {
          each: 0.2,
        },
        onComplete: () => {
          // Continuous rotation animation
          gsap.to(".menu-text", {
            rotation: 270,
            duration: 1,
            ease: "none",
            repeat: -1,
            repeatDelay: 1,
            stagger: {
              each: 0.5,
            },
          });
        }
      });
    }

    const handleCrossClick = () => {
      gsap.to(".nav-menu", {
        top: '-100%',
        bottom: '100%',
        duration: 0.5,
        ease: "power3.inOut"
      })
      gsap.from(".nav-menu", {
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        ease: "power1.inOut"
      
      })
    }

  const path = usePathname();
  return (
    <div className='container mx-auto flex items-center justify-between pt-9'>
      <div className=''>
        <h1 className='text-white text-[28px] font-bold logo'>Rizwaan<span className='text-[#D46868]'>.</span></h1>
      </div>
      <div className='' onClick={handleClick}>
        <img src="/ham.svg" className='cursor-pointer' height={24} width={36} alt="" />
      </div>
      {/* Nav Menu */}
      <div className='absolute bg-white top-[-100%] left-0 right-0 nav-menu max-h-[100vh]'>
      <div className='custom-cursor bg-black w-[10px] h-[10px] rounded-full fixed z-10'></div>
        <div className='mx-auto max-w-7xl w-full'>
        <div className='flex justify-end items-center pt-[60px] cross' onClick={handleCrossClick}>
            <img src="/cross.svg" className='cursor-pointer' width={24} height={24} alt="" />
        </div>
        <div className='flex items-center justify-center'>
        <div className='flex justify-center  w-[905px] max-w-full relative'>
          <div className=''>
          <p className='text-[24px] font-medium absolute left-[-33px] top-[36px] -rotate-90 menu-text'>Menu</p>
          <div className='flex flex-col justify-start gap-[30px]'>
            {links.map((link, index) => {
              return (
                <Link
                href={link.path}
                key={index}
                className={`capitalize text-[64px] font-bold nav-link`}
              >
                {link.name}
              </Link>
              )
            })}
          </div>
          </div>
          <div className='flex flex-col gap-[24px] pl-[250px] pt-[185px]'>
            <a className='inline-block text-[24px] font-semibold nav-text' href="mailto:rizwaanans786@gmail.com">rizwaanans786@gmail.com</a>
            <p className='text-[24px] font-semibold nav-text'>8967458695</p>
            <div className='flex items-center justify-start pt-[30px] gap-[28px] z-[10] nav-icons'>
            <a href="https://github.com/RizWaaN3024" target='_blank'><FiGithub size={30}/></a>
            <a href="https://www.linkedin.com/in/rizwaan-ansari-986374196/" target='_blank'><RiLinkedinFill size={35}/></a>
            <a href="mailto:rizwaanans786@gmail.com"><CiMail size={35}/></a>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
