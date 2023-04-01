import React from "react";
import da_perspective from "../assets/da_perspective_final.png";
import BlogCard from "../components/Blog-Card";

function DAPerspective() {
    return (
        <>
        <section className="flex justify-center">
            <div className="flex flex-row flex-wrap justify-center pb-8">
                <div className="p-4">
                    <img src={da_perspective} alt="Perspectives" className="h-auto pt-8 pb-16" />
                </div>
                <div className="bg-da-light-grey flex flex-row flex-wrap justify-center w-3/5 max-h-screen overflow-y-auto">
                    {/* need to use .map here too */}
                    <BlogCard 
                        image={{ src: da_perspective, alt: "Perspective"}}
                        content={{ 
                            text1: "first text... add some with just text1 and no text2",
                            text2: "The role of an Instructional Designer..." 
                        }}
                        link={{href: "https://www.google.com/maps"}}
                    />
                    <BlogCard 
                        image={{ src: da_perspective, alt: "Perspective"}}
                        content={{ 
                            text1: "first text... add some with just text1 and no text2",
                            text2: "The role of an Instructional Designer..." 
                        }}
                        link={{href: "https://www.google.com/maps"}}
                    />
                    <BlogCard 
                        image={{ src: da_perspective, alt: "Perspective"}}
                        content={{ 
                            text1: "first text... add some with just text1 and no text2",
                            text2: "The role of an Instructional Designer..." 
                        }}
                        link={{href: "https://www.google.com/maps"}}
                    />
                    <BlogCard 
                        image={{ src: da_perspective, alt: "Perspective"}}
                        content={{ 
                            text1: "first text... add some with just text1 and no text2",
                            text2: "The role of an Instructional Designer..." 
                        }}
                        link={{href: "https://www.google.com/maps"}}
                    />
                </div>
            </div>
        </section>
        </>
    )
}

export default DAPerspective