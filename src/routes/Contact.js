import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header className="nav-header">
        <nav ref={navRef}>
          <Link to="/bio">BIO</Link> {/*TEST ROUTER LINK FOR BIO*/}
          <a href="/">Work</a>
          <a href="/cv">CV</a>
          <a href="/press">Press</a>
          <a href="/contact">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="contact-wrap">
        <h1 id="contact-header">DIRECT</h1>
        <p id="contact-p">steverivo@gmail.com</p>

        <h1 id="contact-header">MAIN LINE</h1>
        <p id="contact-p">+1 917-488-2134</p>
      </div>
    </div>
  );
};

export default Contact;
