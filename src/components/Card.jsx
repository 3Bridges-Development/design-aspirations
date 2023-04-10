import React from "react";

export default function Card({ image, description, title }) {
  return (
    <>
      <div className="lg:w-1/3 w-4/5 flex flex-col items-center lg:pl-8 lg:pr-8 pb-8 pt-4 pl-2 pr-2">
        <h2 className="text-da-black self-start text">{title}</h2>
        <div className="h-72 w-100 flex overflow-hidden">
          {image.isVideo ? (
            <video src={image.src} controls="controls" />
          ) : (
            <a
              href={image.src}
              className="pt-8 pb-12 w-100"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="pt-8 pb-12 h-72 justify-items-center overflow-hidden" //height (72) height: 18rem; /* 288px */, min width (80) width: 20rem; /* 320px */
                href={image.src}
              />
            </a>
          )}
        </div>
        <p className="text-da-black text self-start pt-12">{description}</p>
      </div>
    </>
  );
}
