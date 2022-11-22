import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import bitchen from "../videos/bitchen.mp4";
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
          url={bitchen}
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h3>Bitchin’: The Sound and Fury of Rick James</h3>
          <h2 className="video-sub-title">A Showtime Documentary Film</h2>
          <h2 className="video-sub-title">Showrunner/ Producer/ Co-Writer</h2>
          <p className="video-paragraph">
            A raw and intimate documentary look at the wildly colorful life of
            legendary funk artist Rick James. Original interviews with artists,
            collaborators and friends focus on the “punk-funk” music James left
            behind, while illuminating his fearless attitude, social justice
            advocacy and bold musical aspirations. Featuring rare footage of
            James’ incredible live shows and never-before-seen home video.
            Trailer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
