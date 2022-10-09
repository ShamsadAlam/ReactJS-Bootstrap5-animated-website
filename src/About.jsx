import React from "react";
import Web from "../src/images/About.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={Web}
        visit="/contact"
        text="Know more About US"
        button="Contact US"
      />
    </>
  );
};
export default About;
