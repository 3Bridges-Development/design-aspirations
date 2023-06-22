import React, { useState } from "react";
import BlogCard from "../components/Blog-Card";
import { useOutletContext } from "react-router-dom";
import da_perspective from "../assets/da_perspective_final.png";
import ReactMarkdown from "react-markdown";

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
            <div className="flex flex-col justify-center items-center md:w-2/4 w-4/5 rounded">
              <div className="p-4">
                {featuredBlog.blogImage.url && featuredBlog.blogImage.title ? (
                  <>
                    <img
                      src={featuredBlog.blogImage.url}
                      alt={featuredBlog.blogImage.title}
                      className="h-auto pt-8 pb-16 w-full self-center"
                    />
                    <h2 className="text-center pb-4 w-full">
                      {featuredBlog.blogTitle}
                    </h2>
                  </>
                ) : (
                  ""
                )}
                <div className="flex justify-center">
                  {featuredBlog.blogFullDesc ? (
                    <ReactMarkdown className="prose">
                      {featuredBlog.blogFullDesc}
                    </ReactMarkdown>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {featuredBlog.blogButtonText ? (
                <button
                  className="bg-da-black text-da-white p-2 m-2 max-h-fit hover:text-blue-200 self-center rounded"
                  type="button"
                  onClick={() => setShouldShowSingleBlog(false)}
                >
                  {featuredBlog.blogButtonText}
                </button>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <div className="p-4">
              {data.daPerspective.image.url && data.daPerspective.image.title ? (
                <img
                  src={data ? data.daPerspective.image.url : da_perspective}
                  alt={data.daPerspective.image.title}
                  className="h-auto pt-4 pb-8"
                />
              ) : (
                ""
              )}
            </div>
            <hr className="p-1 bg-da-black w-4/5 rounded-md" />
            <section className="flex flex-row flex-wrap justify-center w-4/5 rounded">
              {data.blogCardCollection.items
                ? data.blogCardCollection.items.map((item) => (
                    <BlogCard
                      image={{
                        src: item.blogImage.url,
                        alt: item.blogImage.title,
                        isVideo: item.blogImage.url.includes("videos.") ? true : false,
                      }}
                      content={{
                        text1: item.blogTitle,
                        text2: item.blogShortDesc,
                      }}
                      onClick={handleBlogClick}
                    />
                  ))
                : null}
            </section>
          </div>
        )}
      </section>
    </>
  );
}

export default DAPerspective;
