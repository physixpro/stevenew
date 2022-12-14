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
          <a href="/#">Work</a>
          <Link to="/bio">Bio</Link>
          <a href="/press">Press</a>
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
      <div id="red-line-video-fix" className="top-line"></div>
      <h3>DOCUMENTARY FILMMAKER</h3>

      <></>

      <h3>SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h3>

      <div className="wrap-video-content">
        <ReactPlayer
          className="react-player"
          url="https://player.vimeo.com/video/600438036?h=cecb12f7d7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={false}
        />
        <div className="p-wrapper">
          <h2 className="video-title">
            Bitchin’: The Sound and Fury of Rick James
          </h2>
          <br />
          <h2 className="video-sub-title">A Showtime Documentary Film</h2>
          <br />
          <h2 className="video-sub-title">Showrunner/ Producer/ Co-Writer</h2>
          <br />
          <h5 className="video-trailer">Trailer</h5>
          <br />
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
