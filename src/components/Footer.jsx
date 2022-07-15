import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialPinterest } from "react-icons/ti";
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footerChildren">
        <div style={{ letterSpacing: "6px",fontSize:"1.2rem"}}>
            <Link to={'/'}>Ⱡυ𝐜𝒽σ</Link></div>
        <div className="FooterList">
            <p>HOME</p>
            <p>CONTACTO</p>
            <p>SIGN UP</p>
           
        </div>
        <div>
          <a
            href="https://www.instagram.com/"
            target="blank"
            style={{ marginRight: "10px", color: "#413F42" }}
          >
            <IoLogoInstagram style={{ fontSize: "1.3rem" }} />
          </a>
          <a
            href="https://www.pinterest.com/"
            target="blank"
            style={{ marginRight: "10px", color: "#413F42" }}
          >
            <TiSocialPinterest style={{ fontSize: "1.3rem" }} />
          </a>
        </div>
      </section>
    </footer>
  );
};
