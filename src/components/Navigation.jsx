import React from "react";

export default function Navigation() {
    return (
        <>
            <section className="flex justify-center md:p-12 md:text-base text-lg p-8">
                <div className="flex flex-col items-center md:justify-around flex-wrap md:flex-row text-da-burgundy md:w-10/12">
                    <div><a href="/" className="hover:text-blue-600 p-2">HOME</a></div>
                    <div><a href="about" className="hover:text-blue-600 p-2">ABOUT</a></div>
                    <div><a href="instructionaldesign" className="hover:text-blue-600 p-2">INSTRUCTIONAL DESIGN</a></div>
                    <div><a href="multimediadesign" className="hover:text-blue-600 p-2">MULTI-MEDIA DESIGN</a></div>
                    <div><a href="perspective" className="hover:text-blue-600 p-2">DA PERSPECTIVE</a></div>
                    <div><a href="contact" className="hover:text-blue-600 p-2">CONTACT US</a></div>
                </div>
            </section>
        </>
    )
}