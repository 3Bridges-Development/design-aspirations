import React from "react";

export default function Card({ image, content, link, title }) {
    return (
        <>
            <div className="md:w-1/3 flex flex-col items-center pl-8 pr-8 pb-8">
                <h2 className="text-da-white self-start text-lg">{title}</h2>
                <img src={image.src} alt={image.alt} className="h-auto md:w-full w-3/5 pt-8 pb-16 justify-items-center" />
                <h2 className="text-da-white text-lg">{content.text1}</h2>
                {content.text2 ? (
                    <>
                        <br />
                        <h2 className="text-da-white text-lg">{content.text2}</h2>
                    </>
                ) : (
                    null
                )}
            </div>
        </>
    )
}