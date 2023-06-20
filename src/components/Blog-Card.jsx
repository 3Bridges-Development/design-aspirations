import React from "react";

export default function BlogCard({ image, content, onClick }) {
  return (
    <>
      <div className="lg:w-1/3 w-4/5 flex flex-col items-center lg:pl-8 lg:pr-8 pb-8 pt-4 pl-2 pr-2">
        <div className="overflow-hidden flex h-72">
          {image.src && image.alt ? (
            <img
              src={image.src}
              alt={image.alt}
              className="h-auto pt-8 pb-12 overflow-hidden justify-items-center"
            />
          ) : (
            ""
          )}
        </div>
        {content.text1 && content.text2 ? (
          <>
            <h2
              className="text-lg self-start hover:text-blue-600"
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
