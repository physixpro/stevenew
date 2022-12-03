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
          url="https://player.vimeo.com/video/754412330?h=e700667a89&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h2 className="video-title">Rolling Like Thunder </h2> <br />
          <h2 className="video-title">Trailer</h2>
          <h2 className="video-sub-title">A Showtime Documentary Film</h2>
          <h2 className="video-sub-title">Showrunner/ Producer</h2>
          <p className="video-paragraph">
            Before street art became mainstream, the anonymous outlaws of
            “freight writing” put graffiti on the map. One of the most extreme
            and risky iterations of the art form, freight train graffiti culture
            has a rich history, laden with myth-like artists, remarkable
            romances and competitive graffiti crews. Delving into the
            underground subculture reveals the deep connection between graffiti
            and the American landscape, as well as the artists’ obsession with
            putting life and limb on the line to make their voices heard.
            (Trailer)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
