import React from "react";
import "./main.css";
import "./logic";

const main = () => {
  return (
    <div className="main">
      <div className="left-panel">
        <button className="home">
          <i className="home-icon"></i>Home
        </button>
      </div>
      <div className="videos-grid">
        {/* <video src="http://localhost:4000/video"></video> */}
      </div>
    </div>
  );
};

export default main;
