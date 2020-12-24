import React from "react";
import Header from "./Header";
import Hexagon from "./Hexagon";
import Preloader from "../Preloader";
import SiteWrapper from "../SiteWrapper";
const Home = () => {
  return (
    <div className="dark">
      {/* <Preloader /> */}
      {/* <SiteWrapper /> */}
      <div className="site-wrapper">
        <div className="pt-table">
          <div
            className="pt-tablecell page-home relative"
            // style="background-image: url('img/banner.jpg');"
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
