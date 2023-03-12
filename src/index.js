import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import DAPerspective from './views/DAPerspective';
import ErrorPage from './error-page';
import InstructionalDesign from './views/InstructionalDesign';
import MultiMediaDesign from './views/MultiMediaDesign';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "perspective",
        element: <DAPerspective />,
        errorElement: <ErrorPage />,
      },
      {
        path: "instructionaldesign",
        element: <InstructionalDesign />,
        errorElement: <ErrorPage />,
      },
      {
        path: "multimediadesign",
        element: <MultiMediaDesign />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
