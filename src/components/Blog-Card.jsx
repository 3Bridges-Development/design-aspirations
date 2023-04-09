import React from "react";

export default function BlogCard({ image, content, onClick }) {
  return (
    <>
      <div className="flex flex-col items-center pl-8 pr-8 pb-8 md:w-2/5 w-3/5">
        <div className="overflow-hidden h-[80%] min-w-full flex">
          <img
            src={image.src}
            alt={image.alt}
            className="h-auto w-full pt-8 pb-12 justify-items-center"
          />
        </div>
        <h2
          className="text-lg self-start hover:text-blue-600"
          onClick={onClick}
        >
          {content.text1}
        </h2>
        {content.text2 ? (
          <>
            <br />
            <h2 className="text-lg self-start">{content.text2}</h2>
          </>
        ) : null}
      </div>
    </>
  );
}
