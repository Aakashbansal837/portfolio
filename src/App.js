import React, { useEffect } from "react";
import "./style/index.scss";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import SiteWrapper from "./components/SiteWrapper";
import Background from "./images/banner.jpg";
import constants from "./constants/index";
import PowerSwitch from "./components/PowerSwitch";
import Error404 from "./components/Error/Error404";

export default function App() {
  const [mode, setmode] = React.useState(constants.mode);
  const [theme, setTheme] = React.useState(constants.themeColor);
  const [loader, setLoader] = React.useState("active");

  useEffect(() => {
    let color = window.sessionStorage.getItem("theme");
    let mode = window.sessionStorage.getItem("mode");
    if (!color) {
      window.sessionStorage.setItem("theme", "red");
      setmode("red");
    } else {
      setTheme(color);
    }
    if (!mode) {
      window.sessionStorage.setItem("mode", "dark");
      setmode("dark");
    } else {
      setmode(mode);
    }
    runLoader();
  }, []);

  const changeMode = (color) => {
    constants.mode = color;
    window.sessionStorage.setItem("mode", color);
    setTimeout(() => {
      setmode(color);
    }, 1000);
  };
  const changeTheme = (color) => {
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path : '*',
      element: <Error404 />
    }
  ]);

  return (
    <div className={mode + " " + theme}>
      <Preloader loadClass={loader} />
      <PowerSwitch setmode={changeMode} />
      <SiteWrapper setTheme={changeTheme} />
      <div className="site-wrapper">
        <div className="pt-table">
          <div
            className="pt-tablecell page-home relative"
            style={{ backgroundImage: "url(" + Background + ")" }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
              <RouterProvider router={router} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}