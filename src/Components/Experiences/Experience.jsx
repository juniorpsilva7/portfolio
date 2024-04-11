import React from 'react'
import { FaCircle } from "react-icons/fa";


export default function Experience({
    companyImage,
    position,
    company,
    timeString,
    description,    
}) {
  return (
    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
        <div className='flex sm:hidden gap-6'>
            <div className="flex justify-center items-center min-w-20 max-w-32 h-full overflow-hidden">
                <img className="mx-auto h-auto w-auto rounded-full" src={companyImage} alt="nodejs" />
            </div>
            <div className='flex flex-col gap-2 items-start justify-center'>
                <div className='text-2xl'>{position}</div>
                <div className='font-bold'>{company}</div>
            </div>
        </div>
        <div className="hidden sm:flex justify-center items-center min-w-20 max-w-32 h-full overflow-hidden">
            <img className="mx-auto h-auto w-auto rounded-full" src={companyImage} alt="nodejs" />
        </div>
        <div className='flex flex-col w-full sm:w-1/2'>
            <div className='hidden sm:flex gap-4 items-center font-bold'>{position} <FaCircle size={8} /> {company}</div>
            <div className=' font-extralight italic'>{timeString}</div>
            <div className='text-justify'>{description}</div>
        </div>
    </div>

  )
}
