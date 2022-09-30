import React from "react";
import Header from "./Header";
import Hexagon from "./Hexagon";

const Home = () => {
  return (
    <div className="hexagon-menu-row">
      <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 center">
        <Header />
        <div className="hexagon-menu clear">
          <Hexagon title="home" icon="tf-dial" url="/" />
          <Hexagon title="About" icon="tf-profile-male" url="/" />
          <Hexagon title="services" icon="tf-tools-2" url="/" />
          <Hexagon title="resume" icon="tf-tools" url="/" />
          <Hexagon title="works" icon="tf-briefcase2" url="/" />
          <Hexagon title="testimonial" icon="tf-chat" url="/" />
          <Hexagon title="contact" icon="tf-envelope2" url="/" />
        </div>
      </div>
    </div>
  );
};

export default Home;
