import React from "react";

export default function Project({ title, description, videoURL, githubLink }) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 w-full">
        <div className="sm:hidden text-xl font-bold">{title.toUpperCase()}</div>
        { videoURL && 
        <div className="w-full h-[200px] sm:w-[420px] sm:h-[240px]">
            <iframe
            //   className=" w-[420px] h-[240px]"
            className=" w-full h-full"
            src={videoURL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            ></iframe>
        </div>
        }
        <div className="flex flex-col w-full sm:w-1/3 gap-4">
            <div className="hidden sm:block text-xl font-bold">{title.toUpperCase()}</div>
            <div className=" font-extralight">{description}</div>
            { githubLink &&
            <div className="flex flex-col sm:flex-row sm:gap-2 w-fit">
              <div className="font-bold">Github:</div>
              <a href={githubLink} target="_blank" rel="noreferrer" className=" font-extralight underline">{githubLink}</a>
            </div>
            }
        </div>
        {/* <div>{videoURL}</div> */}
    </div>
  );
}
