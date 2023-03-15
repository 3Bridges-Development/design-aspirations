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
        {/* check what the functionality of this button should be, I think it should go to calendly link */}
        <div className="flex items-center">
          <button
            className="md:absolute md:bottom-30 bg-da-black text-da-yellow p-2 m-2 max-h-10 hover:text-blue-200"
            type="button"
            onClick={console.log("clicked!")}
          >
            BOOK CONSULTATION
          </button>
        </div>
        <hr className="p-1 mt-8 bg-da-black w-4/5 rounded-md"></hr>
      </section>
      <section className="flex flex-col items-center text-center mt-1">
        <h2 className="text-da-burgundy text-2xl justify-center">
          {data.homePage.slogan}
        </h2>
        <h3 className="text-xl m-1">{data.homePage.byline}</h3>
      </section>
    </>
  );
}

export default Home;
