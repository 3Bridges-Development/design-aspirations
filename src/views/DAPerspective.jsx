import React, { useState } from "react";
import da_perspective from "../assets/da_perspective_final.png";
import BlogCard from "../components/Blog-Card";

function DAPerspective() {
    const [shouldShowSingleBlog, setShouldShowSingleBlog] = useState(false);
    const [featuredBlog, setFeaturedBlog] = useState('');

    function handleBlogClick(e) {
        setShouldShowSingleBlog(true);
        const selectedBlog = fakeData.find(item => item.content.text1 === e.target.innerHTML);
        setFeaturedBlog(selectedBlog);
    }

    // remove fakeData when you get actual data
    const fakeData = [{
        image: {
            src: da_perspective,
            alt: "Perspective1"
        },
        content: {
            text1: "first text... add some with just text1 and no text2",
            text2: "The role of an Instructional Designer...",
            // make sure this can be multiple paragraphs and include images
            fullText: "The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer..." 
        },
    },
    {
        image: {
            src: da_perspective,
            alt: "Perspective2"
        },
        content: {
            text1: "second text... add some with just text1 and no text2",
            text2: "The role of an Instructional Designer...",
            // make sure this can be multiple paragraphs and include images
            fullText: "The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer..." 
        },
    },
    {
        image: {
            src: da_perspective,
            alt: "Perspective3"
        },
        content: {
            text1: "3text... add some with just text1 and no text2",
            text2: "The role of an Instructional Designer...",
            // make sure this can be multiple paragraphs and include images
            fullText: "The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer..." 
        },
    },
    {
        image: {
            src: da_perspective,
            alt: "Perspective4"
        },
        content: {
            text1: "4 text... add some with just text1 and no text2",
            text2: "The role of an Instructional Designer...",
            // make sure this can be multiple paragraphs and include images
            fullText: "The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer...The role of an Instructional Designer..." 
        },
    }

]
    return (
        <>
        <section className="flex justify-center pb-8">
            {shouldShowSingleBlog && featuredBlog ? (
                <>
                {/* the alts for the images are what are unique here to determine blog data when clicked */}
                    <div className="bg-da-light-grey flex flex-col items-center md:w-2/4 w-4/5">
                        <div className="p-4">
                            <img src={featuredBlog.image.src} alt={featuredBlog.image.alt} className="h-auto pt-8 pb-16 w-full max-h-fit" />
                            <p className="justify-self-center pb-4">
                            {featuredBlog.content.text1}
                        </p>
                        <p className="justify-self-center">
                            {featuredBlog.content.fullText}
                        </p>
                        </div>
                        <button
                                className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center"
                                type="button"
                                onClick={() => setShouldShowSingleBlog(false)}
                            >
                                RETURN TO BLOG PAGE
                            </button>
                    </div>
                </>
            ) : (
                <div className="flex flex-row flex-wrap justify-center pb-8">
                    <div className="p-4">
                    <img src={da_perspective} alt="Perspectives" className="h-auto pt-8 pb-16" />
                    </div>
                    <div className="bg-da-light-grey flex flex-row flex-wrap justify-center w-3/5 max-h-screen overflow-y-auto">
                        {/* need to use .map here too */}
                        {fakeData.map(item => (
                            <BlogCard 
                                image={{ src: item.image.src, alt: item.image.alt}}
                                content={{ 
                                    text1: item.content.text1,
                                    text2: item.content.text2
                                }}
                                onClick={handleBlogClick}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
        </>
    )
}

export default DAPerspective