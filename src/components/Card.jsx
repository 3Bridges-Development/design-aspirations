import React from "react";

export default function Card({ image, description, title, video }) {
  return (
    <>
      <div className="md:w-1/3 w-4/5 flex flex-col items-center pl-8 pr-8 pb-8 pt-4">
        <h2 className="text-da-black self-start text">{title}</h2>
        <div className="h-72 w-100 flex">
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              className="pt-8 pb-12 justify-items-center h-auto w-full min-w-80 overflow-hidden" //height (72) height: 18rem; /* 288px */, min width (80) width: 20rem; /* 320px */
            />
          ) : (
            <video src={video.src} controls="controls" />
          )}
        </div>
        {image.src? (<a href={image.src} className="pb-4 justify-items-center h-auto w-full min-w-80 overflow-hidden">Click to expand image</a>) : null}
        <p className="text-da-black text self-start">{description}</p>
      </div>
    </>
  );
}
