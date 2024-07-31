import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import logo from './logo.png';

function AppRouter() {
  return (
    <BrowserRouter>
     <header>
      <img src={logo} alt="Logo" />
        <nav>
          
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
     </header>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

// import * as React from "react";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   BrowserRouter as
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

// export default <RouterProvider router={router}/>