import React from "react";
import Navigation from "./components/Navigation";
import WelcomeBanner from "./components/WelcomeBanner";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useContentful from "./hooks/use-contentful";
import "./App.css";

const query = `
query {
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
        <WelcomeBanner showContent={true} />
      ) : (
        <WelcomeBanner showContent={false} />
      )}
      <Navigation />
      <Outlet context={data} />
      <Footer />
    </div>
  );
}

export default App;
