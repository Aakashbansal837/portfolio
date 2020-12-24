import React from "react";

const SiteWrapper = () => {
  return (
    <div class="preview-wrapper">
      <div class="switcher-head">
        <span>Style Switcher</span>
        <div class="switcher-trigger tf-tools"></div>
      </div>

      <div class="switcher-body">
        <h4>Choose Color:</h4>
        <ul class="color-options list-none">
          <li class="c0" data-color="red" title="Default">
            Default
          </li>
          <li class="c1" data-color="blue" title="Red">
            Red
          </li>
          <li class="c2" data-color="green" title="Green">
            Green
          </li>
          <li class="c3" data-color="yellow" title="Blue">
            Blue
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteWrapper;
