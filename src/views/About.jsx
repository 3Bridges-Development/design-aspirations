import React from "react";
import { useOutletContext } from "react-router-dom";
import returnLineBreaks from "../hooks/line-break";

function About() {
  const data = useOutletContext();

  return (
    <>
      <section>
        <h1 className="text-xl flex justify-center pb-4">ABOUT US</h1>
        <div className="bg-da-black p-20 flex flex-col items-center text-center">
          <h2 className="text-4xl text-da-white">{data.aboutPage.quote}</h2>
          <h3 className="text-xl text-da-white">{data.aboutPage.quoteAuthor}</h3>
        </div>
      </section>
      <section className="bg-da-light-grey p-8 flex md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-2/5 w-4/5 flex flex-col items-center">
          <img
            src={data.aboutPage.headshot.url}
            alt={data.aboutPage.headshot.title}
            className="w-2/5 rounded-full"
          />
          <h4 className="pt-4 font-bold">{data.aboutPage.title}</h4>
          <h4 className="pb-4 font-bold">{data.aboutPage.name}</h4>
        </div>
        <div className="w-3/5 flex items-center">
          <p className="text-lg">
            {returnLineBreaks(data.aboutPage.aboutParagraph)}
          </p>
        </div>
      </section>
      <section>
        {data
          ? data.aboutPageTextBlockCollection.items.map((item) => (
              <div className="bg-da-grey md:px-8 p-2 pt-8 pb-8 flex flex-col items-center">
                <h2 className="text-da-black w-3/5 text-xl">{item.headline}</h2>
                <p className="text-da-black w-3/5 text-lg pt-4">
                  {returnLineBreaks(item.description)}
                </p>
              </div>
            ))
          : null}
      </section>
    </>
  );
}

export default About;
