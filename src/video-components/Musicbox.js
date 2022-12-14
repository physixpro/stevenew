import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import "../styles-video/musicbox.css";
import "../Styles/navbarTwo.css";

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
      <div id="red-line-video-fix" className="top-line"></div>
      <h3>DOCUMENTARY FILMMAKER</h3>

      <></>

      <h3>SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h3>

      <div className="wrap-video-content">
        <ReactPlayer
          className="react-player"
          url="https://player.vimeo.com/video/754407381?h=2b68c4265e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="700px"
          height="400"
          // width="30%"
          // height="20%3
          controls={true}
          playing={false}
        />
        <div className="p-wrapper">
          <h2 className="video-title">You're Watching Video Music Box</h2>{" "}
          <br />
          <h2 className="video-sub-title">A Showtime Documentary Film</h2>
          <br />
          <h2 className="video-sub-title">Showrunner/ Producer/ Co-Writer</h2>
          <br />
          <h5 className="video-trailer">Trailer</h5>
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
