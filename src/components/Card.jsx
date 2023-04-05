import React from "react";

export default function Card({ image, description, title, video }) {
  return (
    <>
      <div className="md:w-1/3 flex flex-col items-center pl-8 pr-8 pb-8">
        <h2 className="text-da-white self-start text">{title}</h2>
        {image ? (
          <img
          src={image.src}
          alt={image.alt}
          className="pt-8 pb-16 justify-items-center max-h-72"
        />
        ) : (
          <video src={video.src} controls="controls" />
        )}
        <p className="text-da-white text self-start">{description}</p>
      </div>
    </>
  );
}
