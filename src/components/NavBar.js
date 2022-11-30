import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import "../Styles/navbarTwo.css";
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
      {/****** headers *********/}
      <h1 id="fix-425-h1">STEVE RIVO</h1>
      <div className="top-line" id="topline-work-fix"></div>
      <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
        <h3>DOCUMENTARY FILMMAKER</h3>
      </AnimationOnScroll>
      <></>
      <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
        <h3 id="fix-425-h3">SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h3>
      </AnimationOnScroll>
      <Work />
    </div>
  );
}

export default Navbar;
