import React from "react";
import Navigation from "./components/Navigation";
import WelcomeBanner from "./components/WelcomeBanner";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useContentful from "./hooks/use-contentful";
import "./App.css";

const query = `
query {
  welcomeBanner(id: "2m4bS9r2r0xHw986TvVGqC") {
    bannerHeadline
  }
  navigationCollection(order: sys_firstPublishedAt_ASC) {
    items {
      navUrl
      navText
    }
  }
  homePage(id:"umC0ztECwdjKJwjWzd964") {
    logo {
      title
      url
    }
    slogan
    byline
    idImage {
      title
      url
    }
    mmImage {
      title
      url
    }
    testimonialHeadshot {
      title
      url
    }
    testimonialText
    testimonialName
  }
  aboutPage(id:"hlvVK6Q7xdJqqV7e1Kvc3") {
  	quote
    quoteAuthor
    headshot {
      title
      url
    }
    title
    name
    aboutParagraph
  }
  aboutPageTextBlockCollection {
    items{
      headline
      description
    }
  }
  instructionalDesign(id: "1HmMivcfRIh8t9Maw7zZAt") {
    instructionalImage {
      title
      url
    }
    instructionalTitle
  }
  cardCollection(order: sys_id_DESC) {
    items {
      image {
        title
        url
      }
      title
      cardDescription
    }
  }
  multiMedia(id: "2yOaQmtQPppa11d3zyc4Xj") {
    mmImage {
      title
      url
    }
    title
  }
  mmCardCollection(order:title_DESC) {
      items {
      	image {
        title
        url
      }
      title
      cardDescription
    }
  }
  daPerspective(id: "40ZyLLQspLPfZZmVMVA1m2") {
    image {
      title
      url
    }
  }
  blogCardCollection(order:sys_firstPublishedAt_DESC) {
    items {
      blogImage {
        title
        url
      }
      blogTitle
      blogShortDesc
      blogFullDesc
    }
  }
  footerCollection(order:footerText_ASC) {
    items {
      footerUrl
      footerText
    }
  }
}
`;

function App() {
  let { data, errors } = useContentful(query);

  if (errors)
    return (
      <span style={{ color: "red" }}>
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span></span>;

  return (
    <div className="App flex flex-col min-h-screen">
      {window.location.href.endsWith("/") ? (
        <WelcomeBanner bannerData={data} showContent={true} />
      ) : (
        <WelcomeBanner bannerData={data} showContent={false} />
      )}
      <Navigation navigationData={data} />
      <Outlet context={data} />
      <Footer footerData={data} />
    </div>
  );
}

export default App;
