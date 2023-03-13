import React from "react";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import useContentful from "./hooks/use-contentful";
import "./App.css";

const query = `
query {}
`;

function App() {
  let { data, errors } = useContentful(query);

  if (errors)
    return (
      <span style={{ color: "red" }}>
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
