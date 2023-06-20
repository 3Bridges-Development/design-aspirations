import React from "react";
import ReactMarkdown from "react-markdown";

export default function Card({ image, description, title }) {

  return (
    <>
      <div className="lg:w-1/3 w-4/5 flex flex-col items-center lg:pl-8 lg:pr-8 pb-8 pt-4 pl-2 pr-2">
        {title ? (
          <h2 className="text-da-black self-start text">{title}</h2>
        ) : ""}
        <div className="h-72 w-100 flex overflow-hidden">
          {image.isVideo && image.src ? (
            <div className="pt-8 pb-12 w-100">
              <video src={image.src} controls="controls" className="pt-8 pb-12 h-72 justify-items-center overflow-hidden" width="100%" />
            </div>
          ) : (
            image.src && image.alt ? (
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
                  width="100%"

                />
              </a>
            ) : (
              ""
            )
          )}
        </div>
        <div className="text-da-black text self-start pt-12 cardDescriptionContainer">
        </div>
        {description ? (description.map(item => 
          <ReactMarkdown className="self-start prose">
            {item.props.children}
          </ReactMarkdown>
          )) : ""}
      </div>
    </>
  );
}
