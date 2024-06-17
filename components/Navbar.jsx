"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import {FiGithub} from 'react-icons/fi'
import { CiMail } from 'react-icons/ci'
import { RiLinkedinFill } from 'react-icons/ri'
import React from 'react'


const links = [
  {path: '/', name:'Home'},
  {path: '/projects', name:'Projects'},
  {path: '/about', name:'About'},
  {path: '/contact', name:'Contact'}
]
const Navbar = () => {

  const path = usePathname();
  return (
    <div className='flex items-center justify-between'>
      <div className='pt-[60px]'>
        <img src="/logo-no-background.svg" height={80} width={80} alt="" />
      </div>
      <div className='pt-[90px]'>
        <img src="/hamburger.svg" className='cursor-pointer' height={24} width={36} alt="" />
      </div>
      {/* Nav Menu */}
      <div className='absolute hidden bg-white top-0 bottom-0 left-0 right-0'>
        <div className='mx-auto max-w-7xl w-full'>
        <div className='flex justify-end items-center pt-[60px]'>
            <img src="/cross.svg" className='cursor-pointer' width={24} height={24} alt="" />
        </div>
        <div className='flex items-center justify-center'>
        <div className='flex justify-center  w-[905px] max-w-full relative'>
          <div className=''>
          <p className='text-[24px] font-medium absolute left-[-33px] top-[36px] -rotate-90'>Menu</p>
          <div className='flex flex-col justify-start gap-[30px]'>
            {links.map((link, index) => {
              return (
                <Link
                href={link.path}
                key={index}
                className={`capitalize text-[64px] font-bold`}
              >
                {link.name}
              </Link>
              )
            })}
          </div>
          </div>
          <div className='flex flex-col gap-[24px] pl-[250px] pt-[185px]'>
            <a className='inline-block text-[24px] font-semibold' href="mailto:rizwaanans786@gmail.com">rizwaanans786@gmail.com</a>
            <p className='text-[24px] font-semibold'>8967458695</p>
            <div className='flex items-center justify-start pt-[30px] gap-[28px]'>
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
