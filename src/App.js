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
    consultationUrl
    consultationText
    slogan
    byline
    servicesHeadline
    testimonialHeadline
    testimonialHeadshot {
      title
      url
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
    }
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
      blogButtonText
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
