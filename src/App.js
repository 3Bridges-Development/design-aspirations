import React from "react";
import Navigation from "./components/Navigation";
import WelcomeBanner from "./components/WelcomeBanner";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import UseContentful from "./hooks/use-contentful";
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
      navImage {
        title 
        url
      }
    }
  }
  homePage(id:"umC0ztECwdjKJwjWzd964") {
    logo {
      title
      url
    }
    consultationUrl
    consultationText
    slogan
    byline
    servicesHeadline
    testimonialHeadline
    testimonialHeadshot {
      title
      url
      width
      height
    }
    testimonialText
    testimonialName
  }
  servicesCollection(order:sys_firstPublishedAt_ASC) {
    items {
      servicesHeader
      servicesImage {
        title
        url
        width
        height
      }
      servicesUrl
      servicesText
    }
  }
  aboutPage(id:"hlvVK6Q7xdJqqV7e1Kvc3") {
    aboutHeadline
    quoteImage {
      title
      url
      width
      height
    }
  	quote
    quoteAuthor
    headshot {
      title
      url
      width
      height
    }
    title
    name
    aboutParagraph
  }
  aboutPageTextBlockCollection {
    items{
      headline
      description
      optionalAboutImage {
        url
        title
        description
        width
        height
      }
    }
  }
  instructionalDesign(id: "1HmMivcfRIh8t9Maw7zZAt") {
    instructionalImage {
      title
      url
      width
      height
    }
    instructionalTitle
  }
  cardCollection(order: sys_id_DESC) {
    items {
      image {
        title
        url
        width
        height
      }
      title
      cardDescription
    }
  }
  multiMedia(id: "2yOaQmtQPppa11d3zyc4Xj") {
    mmImage {
      title
      url
      width
      height
    }
    title
  }
  mmCardCollection(order:title_DESC) {
      items {
      	image {
        title
        url
        width
        height
      }
      title
      cardDescription
    }
  }
  daPerspective(id: "40ZyLLQspLPfZZmVMVA1m2") {
    image {
      title
      url
      width
      height
    }
  }
  blogCardCollection(order:sys_firstPublishedAt_DESC) {
    items {
      blogImage {
        title
        url
        width
        height
      }
      blogTitle
      blogShortDesc
      blogFullDesc
      blogButtonText
      readMoreText
    }
  }
  contactPage(id: "2PN0ziNtulRRhNlcQXWbPn") {
    contactHeadline
    contactSubheadline
    formName
    formPhone
    formEmail
    formDescription
    formButtonText
    meetingHeadline
    meetingSubheadline
  }
  meetingButtonCollection (order: sys_firstPublishedAt_ASC) {
    items {
      buttonUrl
      buttonText
    }
  }
  footerWrapper(id: "19bEz5XI2eU3EBLJZuvMAu") {
    footerAlignment
  }
  footerCollection(order:sys_publishedAt_ASC) {
    items {
      footerUrl
      footerText
    }
  }
}
`;
  
  function App() {
    let { data, errors } = UseContentful(query);

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
