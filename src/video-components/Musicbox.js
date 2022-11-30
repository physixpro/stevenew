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
      <div className="top-line"></div>
      <h3>DOCUMENTARY FILMMAKER</h3>

      <></>

      <h3>SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h3>

      <div className="wrap-video-content">
        <ReactPlayer
          className="react-player"
          url="https://streamable.com/2ct4r0"
          width="700px"
          height="400"
          // width="30%"
          // height="20%3
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h2 className="video-title">You're Watching Video Music Box</h2>{" "}
          <br />
          <h2 className="video-title">Trailer</h2>
          <h2 className="video-sub-title">A Showtime Documentary Film</h2>
          <h2 className="video-sub-title">Showrunner/ Producer/ Co-Writer</h2>
          <p className="video-paragraph">
            The untold story of the world’s longest running video show, Video
            Music Box. A hip hop mainstay since 1983, VMB gave a platform to
            artists like Jay-Z, Nas and Mary J. Blige before they hit it big.
            Host Ralph McDaniels’ archives — amassed over 40 nearly years —
            reveal the show’s importance to numerous big-name musicians, as well
            as to the kids that grew up watching.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
