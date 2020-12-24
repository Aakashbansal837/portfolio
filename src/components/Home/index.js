import React from "react";
import Header from "./Header";
import Hexagon from "./Hexagon";

const Home = () => {
  return (
    <>
      <div className="col-xs-12 col-md-10 col-lg-8 center">
        <Header />
        <div className="hexagon-menu clear">
          <Hexagon title="home" />
          <Hexagon title="About" />
          <Hexagon title="services" />
          <Hexagon title="resume" />
          <Hexagon title="works" />
          <Hexagon title="testimonial" />
          <Hexagon title="contact" />
        </div>
      </div>
    </>
  );
};

export default Home;
