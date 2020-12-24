import React from "react";

const Preloader = ({ loadClass }) => {
  return (
    <div className={"preloader " + loadClass}>
      <div className="loading-mask"></div>
      <div className="loading-mask"></div>
      <div className="loading-mask"></div>
      <div className="loading-mask"></div>
      <div className="loading-mask"></div>
    </div>
  );
};

export default Preloader;
