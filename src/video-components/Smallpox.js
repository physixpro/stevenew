import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import smallpox from "../videos/smallpox.mp4";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import "../styles-video/musicbox.css";

const Musicbox = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="player-wrapper">
      <header className="nav-header">
        <nav ref={navRef}>
          <Link to="/bio">BIO</Link> {/*TEST ROUTER LINK FOR BIO*/}
          <a href="/#">Work</a>
          <a href="/#">CV</a>
          <a href="/#">Press</a>
          <a href="/#">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>

      <h1>STEVE RIVO</h1>

      <h1>DOCUMENTARY FILMMAKER</h1>

      <></>

      <h1>SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h1>

      <div className="wrap-video-content">
        <ReactPlayer
          className="react-player"
          url="https://streamable.com/f5x8i7"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h3>Invisible Killers: Smallpox</h3>
          <h3>A 3-part Documentary Series for Discovery</h3>
          <h2 className="video-sub-title">Selected Scenes</h2>
          <h2 className="video-sub-title">Director / Producer</h2>
          <p className="video-paragraph">
            ‘Smallpox’ tells the story of what many people agree is medical
            science's single greatest accomplishment, the complete eradication
            of the worst disease known to humankind, a scourge responsible for
            an estimated 500 million deaths in the 20th century alone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
