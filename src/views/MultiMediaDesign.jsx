import React from "react";
import Card from "../components/Card";
import { useOutletContext } from "react-router-dom";
import returnLineBreaks from "../hooks/line-break";
import mm_header from "../assets/MM_header.png";

function MultiMediaDesign() {
  const data = useOutletContext();

  return (
    <>
      <section className="flex justify-center">
        <img
          src={data ? data.multiMedia.mmImage.url : mm_header}
          alt={data.multiMedia.mmImage.title}
          className="h-auto md:w-1/5 w-3/5 pt-8 pb-8"
        />
      </section>
      <section className="flex justify-center p-8">
        <div className="text-da-black w-4/5 pl-8 text-xl pb-6">
          {data.multiMedia.title}
          <hr className="p-1 mt-8 bg-da-black rounded-md" />
        </div>
      </section>
      <section className="p-8 flex justify-center">
        <div className="flex flex-wrap justify-center w-4/5">
          {data
            ? data.mmCardCollection.items.map((item) => (
                <Card
                  image={{
                    src: item.image.url,
                    isVideo: item.image.url.includes("videos.") ? true : false,
                    alt: item.image.title,
                  }}
                  title={item.title}
                  description={returnLineBreaks(item.cardDescription)}
                />
              ))
            : null}
        </div>
      </section>
    </>
  );
}

export default MultiMediaDesign;
