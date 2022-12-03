import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";

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

      <h1>STEVE RIVO</h1>
      <div className="top-line"></div>
      <h3>DOCUMENTARY FILMMAKER</h3>

      <></>

      <h3>SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h3>

      <div className="wrap-video-content">
        <ReactPlayer
          className="react-player"
          url="https://player.vimeo.com/video/774810146?h=3dca9cb1fa&badge=0&autopause=0&player_id=0&app_id=58479/embed"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h2 className="video-title">Invisible Killers: Smallpox</h2>
          <h2 className="video-title">
            A 3-part Documentary Series for Discovery
          </h2>
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
