import React from "react";
import "../Styles/bio.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import headshot from "../images/headshot.jpeg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Bio = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="bio-box">
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
      <h1 id="steve-bio">Steve Rivo</h1>
      <div className="top-line"></div>
      <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
        <h3 id="steve-bio-sub">DOCUMENTARY FILMMAKER</h3>
      </AnimationOnScroll>
      <></>
      <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
        <h3 id="steve-bio-sub">SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h3>
      </AnimationOnScroll>
      <header className="bio-header">Bio</header>

      <div className="bio-wrapper">
        <img
          id="steve-image"
          src={headshot}
          alt="Steve Rivo"
          width="400px"
          height="200px"
        />
        <p id="bio-paragraph">
          Steve Rivo is an award-winning documentary maker known for powerful
          and intelligent storytelling, expert craftsmanship and high production
          value projects. Across a 25-year career, he has executive produced,
          written and directed dozens of hours of non-fiction television and
          film for most major linear and streaming networks.
          <br></br>
          Recent work includes showrunning the forthcoming hip-hop docuseries
          “RapCaviar Presents,” (a co-production of Spotify and Hulu), producing
          and writing the Showtime documentary films “You’re Watching Video
          Music Box” (directed by Nas), “Rolling Like Thunder” and “Bitchin’:
          The Sound and Fury of Rick James,” (which was nominated for Critics
          Choice Documentary and Hollywood Critics Association awards),
          directing on the final season of the Emmy and Peabody- winning
          documentary series &quot;Anthony Bourdain: Parts Unknown,&quot; and
          directing multiple episodes of &quot;Broken,&quot; an investigative
          docu-series on consumer products for Netflix.<br></br>
          Steve has filmed on five continents and worked with a range of
          filmmakers including Alex Gibney, Robert Redford, Morgan Spurlock, Ric
          Burns and Sacha Jenkins. Projects he has produced have won Emmys,
          Du-Pont-Columbia, Peabody, IDA, Telly and Cine Golden Eagle awards and
          his work has screened at numerous festivals including SXSW, Tribeca,
          Full Frame, and the Nashville Film Festival.<br></br>
          Some of Steve’s other broadcast credits include executive producing
          multiple shows for Court TV, VH1 and MTV, senior producing &quot;The
          Vice Guide to Everything&quot; for VICE and MTV, directing and
          producing episodes of &quot;Death Row Stories&quot; and &quot;Morgan
          Spurlock Inside Man&quot; for CNN, directing &quot;Invisible
          Killers,&quot; a three-part special on viruses for Discovery, and
          producing &quot;New York: A Documentary Film&quot; and &quot;Eugene
          O’Neill&quot; for PBS’s American Experience series. Steve’s
          feature-length documentary film &quot;Carvalho’s Journey&quot;
          premiered in July 2015 at the San Francisco Jewish Film Festival, and
          played at over two dozen festivals around the world including the
          Portland Film Festival, the New York Jewish Film Festival and the
          Festival des Cultures Juives in Paris, France. It won the Audience
          Choice Award at the Maine Jewish Film Festival and Best Documentary at
          the Houston Jewish Film Festival. The film aired nationally on PBS.
          <br></br>
          Steve has also completed a number of film projects for brands and
          clients, including Red Bull, Domus, the American Institute of
          Architects and Random House, Inc. A graduate of Columbia University,
          Steve is a member of the Writer’s Guild of America, East, and an
          adjunct assistant professor at Hofstra University, where he has taught
          in their MFA program. He lives in Brooklyn, NY with his family.
        </p>

        <div className="center">
          <Link to="/files/steve-resume.pdf" target="_blank" download>
            <button id="cv-button">Download Resume</button>
          </Link>
        </div>
      </div>

      <div className="bottom-line"></div>
    </div>
  );
};

export default Bio;
