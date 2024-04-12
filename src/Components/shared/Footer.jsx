import React from 'react'
import juniorLogo from "../../assets/img/Logo Junior Silva.png"
import logoWhats from "../../assets/img/logo_whats.png"

export default function Footer() {
  return (
    <div className="flex w-full h-fit bg-neutral-700 justify-center">
        <div className='w-full flex justify-center items-center'>
            <div className="flex justify-between items-center w-60 h-full py-6 sm:py-10 px-8">
                <img
                    className="mx-auto h-auto w-auto"
                    src={juniorLogo}
                    alt="Junior Silva"
                />
            </div>
        </div>
        

        {/* <div className="flex w-full justify-center items-center gap-2 mt-10">
            <div className="w-6 h-full overflow-hidden animate-pulse">
                <img className="mx-auto h-auto w-auto" src={logoWhats} alt="Profile" />
            </div>
            <div className="flex text-md text-white whitespace-nowrap">
                Contact
            </div>
        </div> */}
            
      
    </div>
  )
}
