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
          url="https://player.vimeo.com/video/13774913?h=1c818da1e9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={false}
        />
        <div className="p-wrapper">
          <h2 className="video-title">New York: A Documentary Film </h2>
          <br />
          <h2 className="video-sub-title">PBS series directed by Ric Burns</h2>
          <br />
          <h2 className="video-sub-title">Producer</h2>
          <br />
          <h5 className="video-trailer">
            Selected Scenes from “Episode Seven: The City and the World”
          </h5>
          <p className="video-paragraph">
            This seven-part, fourteen-hour television event explores New York
            City's rich history as the premier laboratory of modern life. A
            sweeping narrative covering nearly 400 years and 400 square miles,
            it reveals a complex and dynamic city that has played an
            unparalleled role in shaping the nation and reflecting its ideals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
