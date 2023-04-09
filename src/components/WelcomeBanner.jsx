import React from "react";

export default function WelcomeBanner({ bannerData, showContent }) {
  return (
    <>
      {showContent ? (
        <div className="flex justify-center flex-wrap bg-da-black text-da-white p-2">
          {bannerData.welcomeBanner.bannerHeadline}
        </div>
      ) : null}
    </>
  );
}
