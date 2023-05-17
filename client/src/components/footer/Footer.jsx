import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
       
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
  
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
        
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
    
          </div>
          <div className="item">
            <h2>More From Fiverr</h2>
            <span>Fiverr Business</span>
            <span>Fiverr Pro</span>
      
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>C-Freelance</h2>
            <span>Make with ❤️ by Dev-scott</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
  
            </div>
         
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
