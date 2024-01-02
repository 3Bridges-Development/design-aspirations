import React from "react";
import { useOutletContext } from "react-router-dom";
import returnLineBreaks from "../hooks/line-break";
import Gallery from "../components/Gallery.jsx";
import returnContentfulData from "../hooks/getContentfulDataForPage.js";

function About() {

  const imageData = returnContentfulData("About")

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
              className="pb-8"
              width={data.aboutPage.quoteImage.width}
              height={data.aboutPage.quoteImage.height}
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
              width={data.aboutPage.headshot.width}
              height={data.aboutPage.headshot.height}
              className="rounded-full"
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
      {data.aboutPageTextBlockCollection.items.length !== 0 ? data.aboutPageTextBlockCollection.items.map((item) => (
        <section className={item.headline || item.optionalAboutImage ? `p-8 pr-16 pl-8 md:pl-16 flex md:flex-row md:justify-center flex-col items-center` : `pt-8 pb-8 flex md:flex-col md:justify-center flex-col items-center`}>
            {item.description ? (
              <div className={item.headline || item.optionalAboutImage ? `w-4/5 flex items-center` : `pl-4 pr-4 flex items-center`}>
                <p className={item.headline || item.optionalAboutImage ? `text-lg` : `text-lg text-center items-center`}>
                  {returnLineBreaks(item.description)}
                </p>
              </div>
            ) : null}
          <div className="md:w-2/5 w-4/5 flex flex-col items-center">
            {item.optionalAboutImage !== null ? (
              <img
                src={item.optionalAboutImage.url}
                alt={item.optionalAboutImage.title}
                width={item.optionalAboutImage.width}
                height={item.optionalAboutImage.height}
                className="md:pt-0 pt-8 md:pl-8"
              />
            ) : null}
            {item.headline ? (
              <h1 className="pt-4 font-bold">{item.headline}</h1>
            ) : null}
          </div>
        </section>
      )) : null}
      {imageData.data !== null ? (
        <section className="flex justify-center pb-8">
          <Gallery aboutImages={imageData}/>
        </section>
      ) : null}
    </>
  );
}

export default About;
