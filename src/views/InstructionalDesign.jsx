import React from "react";
import Card from "../components/Card";
import { useOutletContext } from "react-router-dom";
import returnLineBreaks from "../hooks/line-break";
import id_header from "../assets/id_header.png";

function InstructionalDesign() {
  const data = useOutletContext();

  return (
    <>
      <section className="flex justify-center">
        <img
          src={
            data ? data.instructionalDesign.instructionalImage.url : id_header
          }
          alt={data.instructionalDesign.instructionalImage.title}
          className="h-auto md:w-1/5 w-3/5 pt-8 pb-8"
        />
      </section>
      <section className="flex items-center justify-center p-8">
        <div className="text-da-black w-4/5 pl-8 text-xl pb-6">
          {data.instructionalDesign.instructionalTitle}
          <hr className="pb-1 bg-black rounded-sm" />
        </div>
      </section>
      <section className="p-8 flex justify-center">
        <div className="flex flex-wrap justify-center w-4/5">
          {data
            ? data.cardCollection.items.map((item) => (
                <Card
                  image={{ 
                    src: item.image.url, 
                    alt: item.image.title,
                    isVideo: item.image.url.includes("videos.") ? true : false,
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

export default InstructionalDesign;
