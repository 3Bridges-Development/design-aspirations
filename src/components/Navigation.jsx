import React from "react";

export default function Navigation() {
    return (
        <>
            <section className="flex justify-center">
                <div className="flex flex-col justify-around flex-wrap md:flex-row text-da-burgundy w-10/12">
                    <div><a href="/">HOME</a></div>
                    <div><a href="about">ABOUT</a></div>
                    <div><a href="instructionaldesign">INSTRUCTIONAL DESIGN</a></div>
                    <div><a href="multimediadesign">MULTI-MEDIA DESIGN</a></div>
                    <div><a href="perspective">DA PERSPECTIVE</a></div>
                    <div><a href="contact">CONTACT US</a></div>
                </div>
            </section>
        </>
    )
}