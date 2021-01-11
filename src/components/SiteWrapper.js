import React from "react";

const SiteWrapper = ({ setTheme }) => {
  const [open, setOpen] = React.useState("");

  return (
    <div className={"preview-wrapper " + open}>
      <div className="switcher-head">
        <span>Style Switcher</span>
        <div
          className="switcher-trigger tf-tools"
          onClick={() => setOpen(open === "" ? "extend" : "")}
        ></div>
      </div>

      <div className="switcher-body">
        <h4>Choose Color:</h4>
        <ul className="color-options list-none">
          <li
            className="c0"
            data-color="red"
            onClick={() => setTheme("red")}
            title="Red"
          >
            Red
          </li>
          <li
            className="c1"
            data-color="blue"
            onClick={() => setTheme("blue")}
            title="Blue"
          >
            Blue
          </li>
          <li
            className="c2"
            data-color="green"
            onClick={() => setTheme("green")}
            title="Green"
          >
            Green
          </li>
          <li
            className="c3"
            data-color="orange"
            onClick={() => setTheme("Orange")}
            title="Orange"
          >
            Orange
          </li>
          <li
            className="c4"
            data-color="yellow"
            onClick={() => setTheme("yellow")}
            title="Yellow"
          >
            Yellow
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteWrapper;
