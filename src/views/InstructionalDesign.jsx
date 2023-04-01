import React from "react";
import id_header from "../assets/id_header.png";
import Card from "../components/Card";
import ride_share from "../assets/ride_share.png"

function InstructionalDesign() {
    return (
        <>
            <section className="flex justify-center">
                <img src={id_header} alt="Instructional Design" className="h-auto md:w-1/5 w-3/5 pt-8 pb-16" />
            </section>
            <section className="bg-da-black flex justify-center p-8">
                <div className="text-da-white w-4/5 pl-8 text-xl">INSTRUCTIONAL DESIGN</div>
            </section>
            <section className="bg-da-black p-8 flex justify-center">
                {/* need to add .map here instead of hard coding multiple cards */}
                <div className="flex flex-wrap justify-center w-4/5">
                    <Card 
                        image={{ src: ride_share, alt: "Instructional Design"}}
                        content={{ 
                            text1: "There is often a misconception as a trainer, coach, instructor, or mental health professional that because you are an expert in your subject matter, you are presenting it in the most engaging and absorbable manner to your audience or client.",
                            text2: "The role of an Instructional Designer is to be something other than a field expert. It is to take a birdseye view of your established outcomes, ensure that all of your supporting content and activities align with the outcomes, and assess if you can improve how you present it." 
                        }}
                        title={"Design"}
                    />
                    {/* remove below cards */}
                    <Card 
                        image={{ src: ride_share, alt: "Instructional Design"}}
                        content={{ 
                            text1: "There is often a misconception as a trainer, coach, instructor, or mental health professional that because you are an expert in your subject matter, you are presenting it in the most engaging and absorbable manner to your audience or client.",
                            text2: "The role of an Instructional Designer is to be something other than a field expert. It is to take a birdseye view of your established outcomes, ensure that all of your supporting content and activities align with the outcomes, and assess if you can improve how you present it." 
                        }}
                        title={"Development"}

                    />
                    <Card 
                        image={{ src: ride_share, alt: "Instructional Design"}}
                        content={{ 
                            text1: "There is often a misconception as a trainer, coach, instructor, or mental health professional that because you are an expert in your subject matter, you are presenting it in the most engaging and absorbable manner to your audience or client.",
                            text2: "The role of an Instructional Designer is to be something other than a field expert. It is to take a birdseye view of your established outcomes, ensure that all of your supporting content and activities align with the outcomes, and assess if you can improve how you present it." 
                        }}
                        title={"Consulting"}
                    />
                </div>
            </section>
        </>
    )
}

export default InstructionalDesign