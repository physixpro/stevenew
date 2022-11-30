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
          url="https://streamable.com/cqyhy5"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h2 className="video-title">
            “Wikileaks Video” from “Caught on Camera: Combat{" "}
          </h2>
          <h2 className="video-sub-title">MSNBC Documentary</h2>
          <h2 className="video-sub-title">Producer and Writer</h2>
          <p className="video-paragraph">
            Segment from MSNBC documentary series "Caught on Camera” about the
            classified U.S. military video leaked by Wikileaks in 2010. The
            video, taken from the gunsight of U.S. Apache helicopters, shows an
            attack on a group of men on the streets of Baghdad in 2007 and the
            firing on a van that was attempting to assist the wounded, among
            whom were two Reuters journalists. Includes commentary by former
            U.S. Army Ranger Ethan McCord, one of the first soldiers to reach
            the site of the attack. The release of the edited video, which
            Julian Assange titled “Collateral Murder,” and which was later
            determined to have been provided by Chelsea Manning, was the event
            that first brought Assange and Wikileaks into the public eye.
            Selected Scenes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
