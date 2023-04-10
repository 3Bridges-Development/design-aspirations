import React, { useState } from "react";
import BlogCard from "../components/Blog-Card";
import { useOutletContext } from "react-router-dom";
import returnLineBreaks from "../hooks/line-break";
import da_perspective from "../assets/da_perspective_final.png";

function DAPerspective() {
  const [shouldShowSingleBlog, setShouldShowSingleBlog] = useState(false);
  const [featuredBlog, setFeaturedBlog] = useState("");

  const data = useOutletContext();

  function handleBlogClick(e) {
    setShouldShowSingleBlog(true);
    const selectedBlog = data.blogCardCollection.items.find(
      (item) => item.blogTitle === e.target.innerHTML
    );
    setFeaturedBlog(selectedBlog);
  }

  return (
    <>
      <section className="flex justify-center pb-8">
        {shouldShowSingleBlog && featuredBlog ? (
          <>
            {/* the text1 for content is what is unique here to determine blog data when clicked - so headers need to be unique */}
            <div className="bg-da-light-grey flex flex-col items-center md:w-2/4 w-4/5">
              <div className="p-4">
                <img
                  src={featuredBlog.blogImage.url}
                  alt={featuredBlog.blogImage.title}
                  className="h-auto pt-8 pb-16 w-full max-h-fit"
                />
                <h2 className="justify-self-center pb-4">
                  {featuredBlog.blogTitle}
                </h2>
                <p className="justify-self-center">
                  {returnLineBreaks(featuredBlog.blogFullDesc)}
                </p>
              </div>
              <button
                className="bg-da-black text-da-white p-2 m-2 max-h-10 hover:text-blue-200 self-center rounded"
                type="button"
                onClick={() => setShouldShowSingleBlog(false)}
              >
                {featuredBlog.blogButtonText}
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-row flex-wrap justify-center pb-8">
            <div className="p-4">
              <img
                src={data ? data.daPerspective.image.url : da_perspective}
                alt={data.daPerspective.image.title}
                className="h-auto pt-8 pb-16"
              />
            </div>
            <div className="bg-da-light-grey flex flex-row flex-wrap justify-center w-3/5 max-h-screen overflow-y-auto">
              {data
                ? data.blogCardCollection.items.map((item) => (
                    <BlogCard
                      image={{
                        src: item.blogImage.url,
                        alt: item.blogImage.title,
                      }}
                      content={{
                        text1: item.blogTitle,
                        text2: item.blogShortDesc,
                      }}
                      onClick={handleBlogClick}
                    />
                  ))
                : null}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default DAPerspective;
