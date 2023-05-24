import React from "react";

export default function Footer({ footerData }) {
  return (
    <>
      <footer className="flex justify-center space-x-5 flex-wrap flex-row bg-da-light-grey p-6 text-lg mt-auto">
        {footerData
          ? footerData.footerCollection.items.map((item) => (
              <>
                <p>{item.footerCopyrightText}</p>
                <div>
                  <a
                    href={item.footerUrl}
                    className="hover:text-blue-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.footerText}
                  </a>
                </div>
              </>
            ))
          : null}
      </footer>
    </>
  );
}
