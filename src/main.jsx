import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import "./index.css";
import Databe from "./components/Databe";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navbar />
    <Content /> */}
    {/* <h1>Creat Airbnb</h1> */}
    <Navbar/>
    <Hero/>
    <Databe/>
  </React.StrictMode>
);
