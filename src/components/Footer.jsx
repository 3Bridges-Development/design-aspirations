import React from "react";

export default function Footer({ footerData }) {
  console.log(footerData);

  return (
    <>
      <footer className="flex justify-center space-x-5 flex-wrap flex-row bg-da-light-grey p-6 text-lg mt-auto">
        {footerData
          ? footerData.footerCollection.items.map((item) => (
              <div>
                <a href={item.footerUrl} className="hover:text-blue-600">
                  {item.footerText}
                </a>
              </div>
            ))
          : null}
      </footer>
    </>
  );
}
