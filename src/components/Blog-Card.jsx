import React from "react";

export default function BlogCard({ image, content, onClick }) {
  return (
    <>
      <div className="flex flex-col items-center overflow-hidden pl-8 pr-8 pb-8 lg:w-2/5 w-4/5">
        <div className="overflow-hidden flex h-72">
          <img
            src={image.src}
            alt={image.alt}
            className="h-72 pt-8 pb-12 overflow-hidden justify-items-center"
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
