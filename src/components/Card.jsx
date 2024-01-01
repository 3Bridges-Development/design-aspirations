import React from "react";
import ReactMarkdown from "react-markdown";

export default function Card({ image, description, title }) {

  return (
    <>
      <div className="lg:w-1/3 w-4/5 flex flex-col items-center lg:pl-8 lg:pr-8 pb-8 pt-4 pl-2 pr-2">
        {title ? (
          <h2 className="text-da-black self-start text">{title}</h2>
        ) : ""}
        <div className="flex overflow-hidden">
          {image.isVideo && image.src ? (
            <div className="flex justify-items-center h-72">
              <video src={image.src} controls="controls" className="pt-8" width="100%" />
            </div>
          ) : (
            image.src && image.alt ? (
              <a
                href={image.src}
                className="pt-8"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="pt-8 justify-items-center" 
                  href={image.src}
                  width={image.width}
                  height={image.height}
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
