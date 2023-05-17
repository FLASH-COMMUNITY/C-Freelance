import React from "react";
import "./NewLetter.scss";

const NewLetter = () => {
  return (
    <div className="newLetter">
      <div className="container">
        <div className="left">
          <img src="../../../public/img/Letter.png" alt="" />{" "}
          <span>Subscribe to our newsLetter</span>
        </div>

        <div className="right">
          <div className="content">
            <input type="text" name="" id="" />
            <button> Subscribe           <img src="../../../public/img/arrowLeft.png" alt="" />  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
