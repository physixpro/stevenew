import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import resumeOne from "../images/resumeOne.png";
import resumeTwo from "../images/resumeTwo.png";
import "../Styles/cv.css";
import { FaBars, FaTimes } from "react-icons/fa";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Cv = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div>
      <header className="nav-header">
        <nav ref={navRef}>
          <a href="/#">Work</a>
          <a href="/cv">CV</a>
          <Link to="/press">Press</Link>
          <a href="/#">Contact</a>
          <Link to="/bio">BIO</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      {/****** headers *********/}
      <h1>STEVE RIVO</h1>
      <div className="top-line"></div>
      <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
        <h3>DOCUMENTARY FILMMAKER</h3>
      </AnimationOnScroll>
      <></>
      <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
        <h3>SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h3>
      </AnimationOnScroll>
      <div className="cv-wrapper">
        <header>
          <div className="center">
            <Link to="/files/steve-resume.pdf" target="_blank" download>
              <button id="cv-button">Download</button>
            </Link>
          </div>
        </header>
        <div className="cv-item">
          <img src={resumeOne} alt="resume" width="800" length="70" />
        </div>
        <div className="cv-item">
          <img src={resumeTwo} alt="resume" width="800" length="70" />
        </div>
      </div>
    </div>
  );
};

export default Cv;
