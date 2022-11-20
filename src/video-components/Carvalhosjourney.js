import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import carvalhos from "../videos/carvalhos.mp4";
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
          url={carvalhos}
          width="558px"
          height="314.36"
          // width="30%"
          // height="20%"
          controls={true}
          playing={true}
        />
        <div className="p-wrapper">
          <h2 className="video-sub-title">A Documentary Film by Steve Rivo</h2>
          <h2 className="video-sub-title">Director, Producer, Writer</h2>
          <p className="video-paragraph">
            A real-life 19th century American western adventure story,
            CARVALHO'S JOURNEY tells the extraordinary story of Solomon Nunes
            Carvalho (1815-1897), an observant Sephardic Jew born in Charleston,
            South Carolina, and his life as a groundbreaking photographer,
            artist and pioneer in American history. Presented at over two dozen
            film festivals and aired on PBS. Selected Scenes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;
