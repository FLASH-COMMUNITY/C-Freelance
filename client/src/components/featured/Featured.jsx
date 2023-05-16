import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find A Freelance</h1>
          <p>
            comme and a personne for your business <br />
            <span className="boule"></span>
            do it for life
          </p>
          <div className="input"></div>
        </div>
        <div className="right">
          <img src="/img/homeImg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
