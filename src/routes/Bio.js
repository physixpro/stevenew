import React from "react";
import "../Styles/bio.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bio = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="bio-box">
      <header className="nav-header">
        <nav ref={navRef}>
          <Link to="/bio">BIO</Link> {/*TEST ROUTER LINK FOR BIO*/}
          <a href="/#">Work</a>
          <a href="/cv">CV</a>
          <Link to="/press">Press</Link>
          <a href="/contact">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <h1>Steve Rivo</h1>
      <h3>
        DOCUMENTARY FILMMAKER SHOWRUNNER <br></br> / DIRECTOR / WRITER /
        PRODUCER
      </h3>

      <header className="bio-header">Bio</header>
      <p>
        Steve Rivo is an award-winning documentary maker known for powerful and
        intelligent storytelling, expert craftmanship and high production value
        projects. Across a 25-year career, he has executive produced, written
        and directed dozens of hours of non-fiction television and film for most
        major broadcast and streaming networks. <br /> Recent work includes
        showrunning the forthcoming hip-hop docuseries “Rap Caviar Presents,” (a
        co-production of Spotify and Hulu), producing and writing the Showtime
        documentary films “You’re Watching Video Music Box” (directed by Nas),
        “Rolling Like Thunder” and “Bitchin’: The Sound and Fury of Rick James,”
        (which was nominated for Critics Choice Documentary and Hollywood
        Critics Association awards), directing on the final season of the Emmy
        and Peabody- winning documentary series "Anthony Bourdain: Parts
        Unknown," and directing multiple episodes of "Broken," an investigative
        series on consumer products for Netflix.
        <br /> Steve has filmed on five continents and worked with a range of
        filmmakers including Alex Gibney, Robert Redford, Morgan Spurlock, Ric
        Burns and Sacha Jenkins. Projects he has produced have won Emmys,
        Du-Pont-Columbia, Peabody, IDA, Telly and Cine Golden Eagle awards and
        his work has screened at numerous festivals including SXSW, Tribeca,
        Full Frame, and the Nashville Film Festival.
        <br /> Some of Steve’s other broadcast credits include executive
        producing multiple shows for Court TV, VH1 and MTV, senior producing
        "The Vice Guide to Everything" for VICE and MTV, directing and producing
        episodes of "Death Row Stories" and "Morgan Spurlock’s Inside Man" for
        CNN, directing "Invisible Killers," a three-part special on viruses for
        Discovery Channel, producing "New York: A Documentary Film" and "Eugene
        O’Neill" for PBS’s American Experience series. Steve’s feature-length
        documentary film "Carvalho’s Journey" premiered in July 2015 at the San
        Francisco Jewish Film Festival, and played at over two dozen festivals
        around the world including the Portland Film Festival, the New York
        Jewish Film Festival and the Festival des Cultures Juives in Paris,
        France.
        <br /> It won the Audience Choice Award at the Maine Jewish Film
        Festival and Best Documentary at the Houston Jewish Film Festival. The
        film aired nationally on PBS. Steve has also completed a number of film
        projects for brands and clients, including Red Bull, Domus, the American
        Institute of Architects and Random House, Inc. A graduate of Columbia
        University, Steve is a member of the Writer’s Guild of America, East,
        and an adjunct assistant professor at Hofstra University, where he has
        taught in their MFA program. He lives in Brooklyn, NY with his family.
      </p>
      <div className="bottom-line"></div>
    </div>
  );
};

export default Bio;
