import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='pt-[60px]'>
        <img src="/logo-no-background.svg" height={80} width={80} alt="" />
      </div>
      <div className='pt-[90px]'>
        <img src="/hamburger.svg" height={24} width={36} alt="" />
      </div>
    </div>
  )
}

export default Navbar
