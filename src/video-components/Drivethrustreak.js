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
          url="https://streamable.com/auyvcl"
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h3>
            Anthony Bourdain: Parts Unknown – “Uruguay” episode from Season 11
            of Emmy and Peabody-winning CNN series
          </h3>
          <h3>Drive Thru Steak </h3>
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
