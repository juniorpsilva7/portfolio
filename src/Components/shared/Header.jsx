import React from "react";
import profile from "../../assets/img/profile.png";
import juniorLogo from "../../assets/img/Logo Junior Silva.png";
import logoWhats from "../../assets/img/logo_whats.png"
import nodejsLogo from "../../assets/img/nodejs.png"
import reactjsLogo from "../../assets/img/react_logo.png"
import dotNetLogo from "../../assets/img/NET_Core_Logo.png"
import angularLogo from "../../assets/img/angular.png"

export default function Header() {
  return (
    <div className="flex flex-col-reverse sm:flex-row w-full h-fit bg-neutral-700 justify-center">

      <div className="w-full sm:w-fit flex justify-center">      
        <div className="flex justify-center items-end sm:items-center w-52 sm:w-72 h-full overflow-hidden">
            <img className="mx-auto h-auto w-auto" src={profile} alt="Profile" />
        </div>

        <a className="sm:hidden flex w-full h-full justify-center items-center gap-2 mt-10" href="https://wa.me/5535991685152">
            <div className="w-8 h-full overflow-hidden animate-pulse">
                <img className="mx-auto h-auto w-auto" src={logoWhats} alt="Profile" />
            </div>
            <div className="flex text-xl text-white whitespace-nowrap">
                Contact
            </div>
        </a>
        
      </div>
      
      <div className="flex flex-col justify-start items-start w-90 h-full py-6 sm:py-10 px-8">
        <img
          className="mx-auto h-auto w-auto"
          src={juniorLogo}
          alt="Junior Silva"
        />
        <div className="w-full flex justify-end items-end text-3xl text-white whitespace-nowrap">
          Fullstack Developer
        </div>

        <a className="hidden sm:flex sm:w-full justify-center items-center gap-2 mt-10" href="https://wa.me/5535991685152">
            <div className="w-8 h-full overflow-hidden animate-pulse">
                <img className="mx-auto h-auto w-auto" src={logoWhats} alt="Profile" />
            </div>
            <div className="flex text-3xl text-white whitespace-nowrap">
                Contact
            </div>
        </a>
      </div>

      <div className="hidden sm:flex sm:flex-col justify-center items-start w-1/3 px-20 gap-4">
        <div className="text-white text-xl">main stacks:</div>
        <div className="flex justify-center items-center gap-6 w-full">
            <div className="flex justify-center items-center min-w-20 max-w-20 h-full overflow-hidden">
                <img className="mx-auto h-auto w-auto" src={nodejsLogo} alt="nodejs" />
            </div>
            <div className="flex justify-center items-center min-w-20 max-w-20 h-full overflow-hidden">
                <img className="mx-auto h-auto w-auto" src={reactjsLogo} alt="nodejs" />
            </div>
            <div className="flex justify-center items-center min-w-20 max-w-20 h-full overflow-hidden">
                <img className="mx-auto h-auto w-auto" src={dotNetLogo} alt="nodejs" />
            </div>
            <div className="flex justify-center items-center min-w-20 max-w-20 h-full overflow-hidden">
                <img className="mx-auto h-auto w-auto" src={angularLogo} alt="nodejs" />
            </div>
        </div>
      </div>
      
    </div>
  );
}
