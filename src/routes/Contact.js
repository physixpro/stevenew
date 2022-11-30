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
          <Link to="/bio">BIO</Link> {/*TEST ROUTER LINK FOR BIO*/}
          <a href="/">Work</a>
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
        <h4 className="contact-header">Direct</h4>
        <button className="contact-p">
          <a href="mailto:steverivo@gmail.com">steverivo@gmail.com</a>{" "}
        </button>
        <h4 className="contact-header">Agent: Alan Moore, UTA</h4>
        <button className="contact-p">
          <a href="mailto:alan.moore@unitedtalent.com">
            alan.moore@unitedtalent.com | +1 (424) 363-1100
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
