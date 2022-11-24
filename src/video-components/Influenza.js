import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import influenza from "../videos/influenza.mp4";
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
          url={influenza}
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h3>Invisible Killers: Influenza</h3>
          <h3>A 3-part Documentary Series for Discovery</h3>
          <h2 className="video-sub-title">Director/Producer</h2>
          <p className="video-paragraph">
            ‘Influenza’ delves into the astonishing history and impact of this
            constantly evolving virus, which is often tragically underestimated
            as merely a cousin to the common cold. The episode explores the
            ongoing threat it poses and the complex science behind it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
