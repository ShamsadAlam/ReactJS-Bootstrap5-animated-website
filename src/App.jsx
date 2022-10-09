import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;
