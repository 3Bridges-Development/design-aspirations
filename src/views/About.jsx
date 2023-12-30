import React from "react";
import { useOutletContext } from "react-router-dom";
import returnLineBreaks from "../hooks/line-break";
import Gallery from "../components/Gallery.tsx";

function About() {
  const data = useOutletContext();

  return (
    <>
      <section>
        <h1 className="text-xl flex justify-center pb-4">
          {data.aboutPage.aboutHeadline}
        </h1>
        <div className="bg-da-black p-20 flex flex-col items-center text-center">
          {data.aboutPage.quoteImage ? (
            <img
              src={data.aboutPage.quoteImage.url}
              alt={data.aboutPage.quoteImage.title}
              className="md:w-2/5 sm:2-1/5 max-h-fit pb-8"
            />
          ) : null}
          {data.aboutPage.quote ? (
            <h2 className="text-4xl text-da-white">{data.aboutPage.quote}</h2>
          ) : null}
          {data.aboutPage.quoteAuthor ? (
            <h3 className="text-xl text-da-white">
              {data.aboutPage.quoteAuthor}
            </h3>
          ) : null}
        </div>
      </section>
      <section className="p-8 pr-16 pl-8 flex md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-2/5 w-4/5 flex flex-col items-center">
          {data.aboutPage.headshot.url && data.aboutPage.headshot.title ? (
            <img
              src={data.aboutPage.headshot.url}
              alt={data.aboutPage.headshot.title}
              className="w-2/5 rounded-full"
            />
          ) : null}
          <h4 className="pt-4 font-bold">{data.aboutPage.title}</h4>
          <h4 className="pb-4 font-bold">{data.aboutPage.name}</h4>
        </div>
        <div className="md:w-3/5 w-4/5 flex items-center">
          <p className="text-lg">
            {returnLineBreaks(data.aboutPage.aboutParagraph)}
          </p>
        </div>
      </section>
      {data.aboutPageTextBlockCollection.length !== 0 ? data.aboutPageTextBlockCollection.items.map((item) => (
        <section className="p-8 pr-16 pl-8 md:pl-16 flex md:flex-row md:justify-center flex-col items-center">
          <div className={`w-4/5 flex items-center`}>
            <p className="text-lg">
              {returnLineBreaks(item.description)}
            </p>
          </div>
          <div className="md:w-2/5 w-4/5 flex flex-col items-center">
            {item.optionalAboutImage ? (
              <img
                src={item.optionalAboutImage.url}
                alt={item.optionalAboutImage.title}
                className="w-2/5 rounded-full md:pt-0 pt-8"
              />
            ) : null} 
            {item.headline ? (
              <h1 className="pt-4 font-bold">{item.headline}</h1>
            ) : null}
          </div>
        </section>
      )) : null}
      <section className="flex justify-center">
        <Gallery />
      </section>
    </>
  );
}

export default About;
