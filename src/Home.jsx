import React from "react";
import Web from "../src/images/Home.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow yourself With "
        imgsrc={Web}
        noble="Noble"
        text="We Build The Future"
        visit="/services"
        button="Get Started"
      />
    </>
  );
};
export default Home;
