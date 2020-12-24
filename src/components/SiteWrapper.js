import React from "react";

const SiteWrapper = () => {
  return (
    <div className="preview-wrapper">
      <div className="switcher-head">
        <span>Style Switcher</span>
        <div className="switcher-trigger tf-tools"></div>
      </div>

      <div className="switcher-body">
        <h4>Choose Color:</h4>
        <ul className="color-options list-none">
          <li className="c0" data-color="red" title="Default">
            Default
          </li>
          <li className="c1" data-color="blue" title="Red">
            Red
          </li>
          <li className="c2" data-color="green" title="Green">
            Green
          </li>
          <li className="c3" data-color="yellow" title="Blue">
            Blue
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteWrapper;
