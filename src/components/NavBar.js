import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import Work from "../components/Work";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header className="nav-header">
        <nav id="main-nav" ref={navRef}>
          <a href="/#">Work</a>
          <a href="/cv">CV</a>
          <Link to="/press">Press</Link>
          <a href="/contact">Contact</a>
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
      <Work />
    </div>
  );
}

export default Navbar;
