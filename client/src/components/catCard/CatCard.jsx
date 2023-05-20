import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card , cat }) {
  return (
    <Link className="link" to={`/gigs?cat=${cat}`}>
      {/* <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div> */}
      <div className="card">
        <div className="container">
          <div className="top">
            <div className="profil">
              <img src={card.img} alt="" />
              <div>
                <span className="title">Sado Scott</span>
                <span className="date">27 janvier 2022</span>
              </div>
            </div>
            <div className="middle"></div>
          </div>

          <div className="bottom">
            <span className="desc">I will design think for you</span>
            <div className="price">
              <h2>50.000,0 Fcfa</h2> <span>{cat}</span>
            </div>
            <div className="score">
              {" "}
              <div className="etoile"></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default CatCard;
