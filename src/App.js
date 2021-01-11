import React, { useEffect } from "react";
import "./style/index.scss";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import SiteWrapper from "./components/SiteWrapper";
import Background from "./images/banner.jpg";
import constants from "./constants/index";
import PowerSwitch from "./components/PowerSwitch";

export default function App() {
  const [mode, setmode] = React.useState(constants.mode);
  const [theme, setTheme] = React.useState(constants.themeColor);
  const [loader, setLoader] = React.useState("active");

  useEffect(() => {
    runLoader();
    let color = window.sessionStorage.getItem("theme");
    if (!color) {
      window.sessionStorage.setItem("theme", "red");
    }
    setTheme(color);
  }, []);

  const changeMode = (color) => {
    constants.mode = color;
    setTimeout(() => {
      setmode(color);
    }, 1000);
  };
  const changeTheme = (color) => {
    console.log("thems :", color);
    setTheme(color);
    window.sessionStorage.setItem("theme", color);
  };

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
    <div className={mode + " " + theme}>
      <Preloader loadClass={loader} />
      <PowerSwitch setmode={changeMode} />
      <SiteWrapper setTheme={changeTheme} />
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
