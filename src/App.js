import React, { useEffect } from "react";
import "./style/index.scss";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import SiteWrapper from "./components/SiteWrapper";
import Background from "./images/banner.jpg";

export default function App() {
  const [theme, setTheme] = React.useState("black");
  const [loader, setLoader] = React.useState("");

  useEffect(() => {
    runLoader();
  }, []);

  const runLoader = () => {
    setLoader("");
    setTimeout(() => {
      setLoader("active");
    }, 1000);
    setTimeout(() => {
      setLoader("active done");
    }, 2000);
  };
  return (
    <div className={theme}>
      <Preloader loadClass={loader} />
      <SiteWrapper />
      <div className="site-wrapper">
        <div className="pt-table">
          <div
            className="pt-tablecell page-home relative"
            style={{ backgroundImage: "url(" + { Background } + ")" }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <Router>
                  <Switch>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
