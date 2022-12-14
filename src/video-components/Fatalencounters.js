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
          url="https://player.vimeo.com/video/92421403?h=64322a9d99&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={false}
        />
        <div className="p-wrapper">
          <h2 className="video-title">
            Fatal Encounters – “Terror in the Woods”
          </h2>
          <br />
          <h2 className="video-sub-title">
            True Crime series for Investigation Discovery
          </h2>
          <br />
          <h2 className="video-sub-title">Director, Producer, Writer</h2>
          <br />
          <h5 className="video-trailer">Selected Scene</h5>
          <p className="video-paragraph">
            A weekend of deer hunting in northern Wisconsin - usually a time of
            camaraderie and celebration - turns terrifying when, in less than 48
            hours, an altercation between hunters in the woods leads to murder.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
