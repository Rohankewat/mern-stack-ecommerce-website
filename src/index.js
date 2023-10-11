import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <Header/> */}
    <Home />
  </BrowserRouter>

);