import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import invisiblekillers from "../videos/invisiblekillers.mp4";
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

      <h3>DOCUMENTARY FILMMAKER</h3>

      <></>

      <h3>SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h3>

      <div className="wrap-video-content">
        <ReactPlayer
          className="react-player"
          url={invisiblekillers}
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h3>Invisible Killers </h3>
          <h3>Trailer</h3>
          <h2 className="video-sub-title">
            A 3-part Documentary Series for Discovery
          </h2>
          <h2 className="video-sub-title">Director and Producer</h2>
          <p className="video-paragraph">
            Invisible Killers looks at how viruses have shaped our health and
            history, the biological and social impact they have on our global
            society, and the incredible science that has arisen to combat them.
            Each episode focuses on an individual virus, reaching back to tell
            the history of that virus, and looking closely at the state of the
            research and technology surrounding the disease today. Trailer /
            Promo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
