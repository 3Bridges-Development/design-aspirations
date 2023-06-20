import React from "react";

export default function Footer({ footerData }) {
  return (
    <>
      <footer
        className={`flex ${
          footerData.footerWrapper.footerAlignment
            ? footerData.footerWrapper.footerAlignment
            : "justify-center"
        } space-x-5 flex-wrap flex-row bg-da-light-grey p-6 text-lg mt-auto`}
      >
        {footerData
          ? footerData.footerCollection.items.map((item) => (
              <>
                {item.footerText ? (
                  <a
                    href={item.footerUrl}
                    className="hover:text-blue-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.footerText}
                  </a>
                ) : (
                  ""
                )}
              </>
            ))
          : null}
      </footer>
    </>
  );
}
