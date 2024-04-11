import React from "react";

export default function Project({ title, description, videoURL }) {
  return (
    <div className="flex justify-center items-center">
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TzzGer9cKhA?si=ueUh2-mJO6laG0xo&rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="w-1/3">
        <div className=" text-xl font-bold">{title.toUpperCase()}</div>
        <div className=" font-extralight">{description}</div>
      </div>
      {/* <div>{videoURL}</div> */}
    </div>
  );
}
