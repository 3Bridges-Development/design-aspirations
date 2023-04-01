import React from "react";
import daLogo from "../assets/daLogo.png";

function About() {
    return (
        <>
            <section>
                <h1 className="text-xl flex justify-center pb-4">ABOUT US</h1>
                <div className="bg-da-mauve p-20 flex flex-col items-center text-center">
                    <h2 className="text-2xl">“The future belongs to those who believe in the beauty of their dreams.”</h2>
                    <h3 className="text-xl">Eleanor Roosevelt</h3>
                </div>
            </section>
            <section className="bg-da-light-grey p-8 flex md:flex-row md:justify-center flex-col items-center">
                <div className="md:w-2/5 w-4/5 flex flex-col items-center">
                    <img src={daLogo} alt="head shot" className="w-2/5" />
                    <h4 className="pt-4 font-bold">Founder/CEO</h4>
                    <h4 className="pb-4 font-bold">Donisa Norman</h4>
                </div>
                <div className="w-3/5 flex items-center">
                    <p className="text-lg">I realized that I've always been passionate about wellness, education, and training personally and professionally. That realization, coupled with a sincere desire to help people, is how Designed Aspirations came to be.</p>
                </div>
            </section>
            <section>
                <div className="bg-da-black md:px-8 p-2 pt-8 pb-8 flex flex-col items-center">
                    <h2 className="text-da-white w-3/5 text-xl">Our Mission</h2>
                    <p className="text-da-white w-3/5 text-lg pt-4">At Designed Aspirations, we are committed to helping others Aspire to Be; Aspire to Do; Aspire to Learn, Aspire to Achieve, and Aspire to Dream.</p>
                </div>
                <div className="bg-da-black md:px-8 p-2 pb-8 flex flex-col items-center">
                    <h2 className="text-da-white w-3/5 text-xl">Our Motivation</h2>
                    <p className="text-da-white w-3/5 text-lg pt-4">Designed Aspirations start may sound familiar. At some point in life, many find themselves unsure of their purpose. Reflecting on experiences, hosts of skillsets, achievements, and what felt the most fulfilling in their career.{<br />}{<br/>} Our commitment is to partner with you to assess your needs and lend our expertise in how we learn best, keeping human-centered design in mind.{<br/>}{<br/>}Our commitment is to partner with you to assess your needs and lend our expertise in how we learn best, keeping human-centered design in mind.{<br />}{<br/>}We will meet you where you are and strategize to get you where you want to be. After an initial consultation and a thorough analysis, you may seek a detailed report to start conversations within your organization. You may be looking to upscale your existing material. You may be an expert in your field and are ready to share that knowledge, but you aren't quite sure how. We can help with that, too, by designing and developing effective and engaging solutions.</p>
                </div>
            </section>
        </>
    )
}

export default About