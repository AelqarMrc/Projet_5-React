// import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// import Router from './Router.jsx';
import Layout from "./layouts/Layout"
import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import Location from './pages/Location/index.jsx';
import logements from './utils/logements.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "location/:id",
        element: <Location logements={logements}/>,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

