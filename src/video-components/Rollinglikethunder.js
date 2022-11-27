import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import rollinglikethunder from "../videos/rollinglikethunder.mp4";
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
          url="https://streamable.com/wl423e"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h3>Rolling Like Thunder </h3> <br />
          <h3>Trailer</h3>
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
