import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/contact.css";

const Contact = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header className="nav-header">
        <nav ref={navRef}>
          <Link to="/#">Work</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/press">Press</Link>
          <Link to="/contact">Contact</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="contact-wrap">
        <h4 className="contact-header">Direct</h4>
        <button className="contact-p">
          <a href="mailto:steverivo@gmail.com">steverivo@gmail.com</a>{" "}
        </button>
        <h4 className="contact-header">Agent</h4>
        <h4 className="contact-header-sub">Alan Moore, United Talent Agency</h4>
        <button className="contact-p">
          <a href="mailto:alan.moore@unitedtalent.com">
            alan.moore@unitedtalent.com
          </a>
          <h6 id="number"> +1 (424) 363-1100</h6>
        </button>
      </div>
    </div>
  );
};

export default Contact;
