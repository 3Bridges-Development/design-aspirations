import React from "react";

export default function BlogCard({ image, content, onClick }) {
  return (
    <>
      <div className="flex flex-col items-center lg:pl-8 lg:pr-8 pb-8 pt-4 pl-2 pr-2 w-4/5 lg:w-1/3">
        <div className="h-auto w-100 flex overflow-hidden">
          {image.isVideo && image.src ? (
            <div className="pt-8 pb-12 w-100">
              <video src={image.src} controls="controls" className="pt-8 pb-12 h-72 justify-items-center overflow-hidden" />
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
                  width="100%"
                  className="pt-8 pb-4 h-72 justify-items-center overflow-hidden" //height (72) height: 18rem; /* 288px */, min width (80) width: 20rem; /* 320px */
                />
              </a>
          ) : (
            ""
          ))}

        </div>
        {content.text1 && content.text2 ? (
          <>
            <h2
              className="text-lg self-start hover:text-blue-600 cursor-pointer"
              onClick={onClick}
            >
              {content.text1}
            </h2>
              <br />
              <h2 className="text-lg self-start">{content.text2}</h2>
            </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
