import React from "react";
import Header from "./Header";
import Hexagon from "./Hexagon";
const Home = () => {
  return (
    <>
      <Header />
      <div class="hexagon-menu clear">
        <Hexagon title="home" />
        <Hexagon title="About" />
        <Hexagon title="services" />
        <Hexagon title="resume" />
        <Hexagon title="works" />
        <Hexagon title="testimonial" />
        <Hexagon title="contact" />
      </div>
    </>
  );
};

export default Home;
