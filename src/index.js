import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from "./layouts/Layout"
import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import Location from './pages/Location/index.jsx';
import logements from './utils/logements.json';
import Error from './pages/Error/index.jsx';

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
      },
      
      {
        path: "*",
        element: <Error />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

