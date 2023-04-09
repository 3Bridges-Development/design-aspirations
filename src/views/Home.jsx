import React from "react";
import daLogo from "../assets/daLogo.png";
import { useOutletContext } from "react-router-dom";

function Home() {
  const data = useOutletContext();

  return (
    <>
      <section className="flex justify-center p-2 relative flex-wrap md:m-0 m-1">
        <img
          src={data ? data.homePage.logo.url : daLogo}
          alt={data.homePage.logo.title}
          className="md:w-2/5 sm:2-1/5 max-h-fit"
        />
        <div className="flex items-center">
          <button
            className="md:absolute md:bottom-30 bg-da-mauve text-da-white p-2 m-2 max-h-10 hover:text-blue-200 rounded"
            type="button"
          >
            <a
              href={data.homePage.consultationUrl}
              className="font-bold text-da-black"
            >
              {data.homePage.consultationText}
            </a>
          </button>
        </div>
        <hr className="p-1 mt-8 bg-da-black w-4/5 rounded-md"></hr>
      </section>
      <section className="flex flex-col items-center text-center mt-1 pb-8">
        <h2 className="text-da-burgundy text-2xl justify-center">
          {data.homePage.slogan}
        </h2>
        <h3 className="text-xl m-1">{data.homePage.byline}</h3>
      </section>
      <section className="text-center mt-1 bg-da-grey p-2 py-8">
        <h2 className="text-2xl pb-4">{data.homePage.servicesHeadline}</h2>
        <div className="flex flex-row justify-center flex-wrap">
          {data
            ? data.servicesCollection.items.map((item) => (
                <div className="flex flex-col items-center p-20">
                  <h2 className="text-lg">{item.servicesHeader}</h2>
                  <img
                    className="w-full max-h-fit p-10"
                    src={item.servicesImage.url}
                    alt={item.servicesImage.title}
                  />
                  <a className="text-lg" href={item.servicesUrl}>
                    {item.servicesText}
                  </a>
                </div>
              ))
            : null}
        </div>
      </section>
      <section className="flex flex-col items-center text-center mt-1 p-2 py-8">
        <h2 className="text-2xl justify-center">
          {data.homePage.testimonialHeadline}
        </h2>
        {/* need logic to only show headshot photo when data exists */}
        {data.homePage.logo.url ? (
          <img
            className="w-1/5 max-h-fit p-2 rounded-full"
            src={data.homePage.testimonialHeadshot.url}
            alt={data.homePage.testimonialHeadshot.title}
          />
        ) : null}
        <h4 className="italic text-lg p-2 md:w-3/5">
          {data.homePage.testimonialText}
        </h4>
        <h5 className="font-bold text-lg p-2">
          {data.homePage.testimonialName}
        </h5>
      </section>
    </>
  );
}

export default Home;
