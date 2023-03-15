import React from "react";
import daLogo from "../assets/daLogo.png";

function Home() {
    return (
        <>
            <section className="flex justify-center p-2 relative flex-wrap md:m-0 m-1">
                <img src={daLogo} alt="design aspirations logo" className="md:w-2/5 sm:2-1/5 max-h-fit" />
                {/* check what the functionality of this button should be, I think it should go to calendly link */}
                <div className="flex items-center">
                    <button className="md:absolute md:bottom-30 bg-da-black text-da-yellow p-2 m-2 max-h-10 hover:text-blue-200" type="button" onClick={console.log("clicked!")}>BOOK CONSULTATION</button>
                </div>
                <hr className="p-1 mt-8 bg-da-black w-4/5 rounded-md"></hr>
            </section>
            <section className="flex flex-col items-center text-center mt-1 pb-8">
                <h2 className="text-da-burgundy text-2xl justify-center">Designed Aspirations offer Instructional Design and Development of educational and training material.</h2>
                <h3 className="text-xl m-1 mb-8">Pharmaceutical - Mental Wellness - Human Services</h3>
            </section>
            <section className="text-center mt-1 bg-da-grey p-2 py-8">
                <h2 className="text-2xl">SERVICES OFFERED</h2>
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg">INSTRUCTIONAL DESIGN</h2>
                        <img className="w-2/5 max-h-fit p-2" src={daLogo} alt="ID" />
                        <a className="text-lg" href="instructionaldesign">see more</a>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg">MULTI-MEDIA DESIGN</h2>
                        <img className="w-2/5 max-h-fit p-2" src={daLogo} alt="MD" />
                        <a className="text-lg" href="multimediadesign">see more</a>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center text-center mt-1 p-2 py-8">
                <h2 className="text-2xl justify-center">TESTIMONIALS</h2>
                {/* need logic to only show headshot photo when data exists */}
                {daLogo ? (
                    <img className="w-1/5 max-h-fit p-2" src={daLogo} alt="testimonial" />
                ): (
                    null
                )}
                <h4 className="italic text-lg p-2">"Testimonial content goes here."</h4>
                <h5 className="font-bold text-lg p-2">Name</h5>
            </section>
        </>
    )
}

export default Home