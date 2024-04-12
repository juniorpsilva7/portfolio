import React from 'react'
import { Link } from 'react-scroll';

export default function NavMenu() {
  return (
    <div className='flex w-full h-16 bg-neutral-600 justify-start sm:justify-end items-center px-20 gap-8 text-amber-500 font-bold text-sm sm:text-xl'>
        {/* <div>Home</div> */}
        <Link className='cursor-pointer' to="experiences" smooth={true} duration={500}>Experiences</Link>
        <Link className='cursor-pointer' to="projects" smooth={true} duration={500}>Projects</Link>
        <Link className='cursor-pointer' to="education" smooth={true} duration={500}>Education</Link>
    </div>
  )
}
