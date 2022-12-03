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
          url="https://player.vimeo.com/video/774810330?h=869ad9cf59&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h2 className="video-title">
            Anthony Bourdain: Parts Unknown – “Uruguay” episode from Season 11
            of Emmy and Peabody-winning CNN series
          </h2>
          <h2 className="video-title">Kayak Fishing</h2>
          <h2 className="video-sub-title">Director</h2>

          <p className="video-paragraph">
            Bourdain journeys to the progressive South American nation of
            Uruguay, accompanied by NYC chef Ignacio Mattos, a native Uruguayan,
            where they enjoy a wide selection of meats in a country where cattle
            outnumber people almost 4 to 1.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
