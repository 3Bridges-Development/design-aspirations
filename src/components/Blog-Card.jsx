import React from "react";

export default function BlogCard({ image, content, onClick }) {
  return (
    <>
      <div className="flex flex-col items-center pl-8 pr-8 pb-8 md:w-2/5 w-3/5">
        <img
          src={image.src}
          alt={image.alt}
          className="h-auto md:w-full w-3/5 pt-8 pb-16 justify-items-center"
        />
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
