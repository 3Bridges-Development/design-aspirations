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
          className="h-auto md:w-1/5 w-3/5 pt-8 pb-16"
        />
      </section>
      <section className="bg-da-grey flex justify-center p-8">
        <div className="text-da-white w-4/5 pl-8 text-xl">
          {data.instructionalDesign.instructionalTitle}
        </div>
      </section>
      <section className="bg-da-grey p-8 flex justify-center">
        <div className="flex flex-wrap justify-center w-4/5">
          {data
            ? data.cardCollection.items.map((item) => (
                <Card
                  image={{ src: item.image.url, alt: item.image.title }}
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
