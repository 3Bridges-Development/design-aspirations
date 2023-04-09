import React from "react";

export default function Navigation({ navigationData }) {
  return (
    <>
      <section className="flex justify-center md:p-12 md:text-base text-lg p-8">
        <div className="flex flex-col items-center md:justify-around flex-wrap md:flex-row text-da-burgundy md:w-10/12">
          {navigationData
            ? navigationData.navigationCollection.items.map((item) => (
                <div>
                  <a href={item.navUrl} className="hover:text-blue-600 p-2">
                    {item.navText}
                  </a>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  );
}
