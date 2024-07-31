import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index.jsx';
import reportWebVitals from './reportWebVitals';
import Router from './Router.jsx';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Header />

    <Router />

    <Footer />

  </React.StrictMode>
);

reportWebVitals();
