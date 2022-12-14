import React from "react";
import "../Styles/press.css";
import "../Styles/pressTwo.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Fullpage = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  /*******  This is our function for scrolling to different press pages on button click */

  // function scrollToContentTwo() {
  //   const element = document.getElementById("content-2");
  //   element.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrollToContentThree() {
  //   const element = document.getElementById("content-3");
  //   element.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrollToContentFour() {
  //   const element = document.getElementById("content-4");
  //   element.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrollToContentFive() {
  //   const element = document.getElementById("content-5");
  //   element.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrollToContentSix() {
  //   const element = document.getElementById("content-6");
  //   element.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrollToContentSeven() {
  //   const element = document.getElementById("content-7");
  //   element.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrollToContentEight() {
  //   const element = document.getElementById("content-8");
  //   element.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrollToContentNine() {
  //   const element = document.getElementById("content-9");
  //   element.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <div>
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
      {/****** headers *********/}
      <h1 id="press-title">SELECTED PRESS</h1>
      <div className="top-line" id="topline-press-fix"></div>
      {/* <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
        <h3>DOCUMENTARY FILMMAKER</h3>
      </AnimationOnScroll>
      <></>
      <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
        <h3>SHOWRUNNER / DIRECTOR / WRITER / PRODUCER</h3>
      </AnimationOnScroll> */}
      <br />

      {/****************** Press section *************** */}
      <div className="list-container">
        <ol className="press">
          <li id="press-item">
            <a
              className="test-a"
              href="https://deadline.com/2022/07/hulu-orders-new-documentary-series-rapcaviar-presents-1235064061/"
              target="_blank"
            >
              Deadline: ???Hulu Orders New Documentary Series RapCaviar Presents???
            </a>
          </li>
          <br />
          <li>
            <a
              className="test-a"
              href="https://www.harpersbazaar.com/culture/film-tv/g37597790/best-films-of-2021-so-far/"
              target="_blank"
            >
              Harper???s Bazaar: ???The Best Films of 2021 (so far)???
            </a>
          </li>{" "}
          <br />
          <li>
            <a
              className="test-a"
              href="https://www.nytimes.com/2021/09/01/movies/rick-james-documentary.html"
              target="_blank"
            >
              NY Times: ???Coming to Terms with the Legacy of Rick James??? Feature
              on Bitchin???: The Sound and Fury of Rick James
            </a>
          </li>{" "}
          <br />
          {/***************  NO. 4 - BITCHEN SOUND AND FURY *****************  */}
          <li>
            <a
              className="test-a"
              href="https://www.nytimes.com/2021/09/02/movies/rick-james-review.html"
              target="_blank"
            >
              NY Times: ???Bitchin???: The Sound and Fury of Rick James??? Review: A
              Very Kinky Guy??? (Link and PDF)
            </a>
          </li>
          <br />
          <li>
            <a
              className="test-a"
              href="https://www.wnyc.org/story/tribeca-bitchin-sound-and-fury-rick-james"
              target="_blank"
            >
              WNYC ???All Of It???: Radio Interview with Sacha Jenkins and Steve
              Rivo
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://www.thehypemagazine.com/2021/08/steve-rivo-on-the-new-bitchin-the-sound-fury-of-rick-james-documentary-future-projects-with-sacha-jenkins-more/"
              target="_blank"
            >
              Hype Magazine: Video Interview and article. ???Steve Rivo On The New
              ???Bitchin???: The Sound & Fury Of Rick James??? Documentary, Future
              Projects With Sacha Jenkins & More???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://rockcellarmagazine.com/bitchin-sound-and-fury-rick-james-documentary-interview-sacha-jenkins-steve-rivo/"
              target="_blank"
            >
              Rock Cellar Magazine: ???Bitchin???: The Sound and Fury of Rick
              James???: Q&A with Director Sacha Jenkins & Producer Steve Rivo
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://www.esquire.com/entertainment/movies/a37469285/rick-james-bitchin-showtime-documentary-true-story/"
              target="_blank"
            >
              Esquire: ???Showtime's Bitchin' Dives Into the Many Lives of Young
              Rick James???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://www.theguardian.com/tv-and-radio/2021/sep/02/rick-james-documentary-bitchin-the-sound-and-fury"
              target="_blank"
            >
              Guardian: ??????There???s a lot to unpack???: the dark, difficult life of
              Rick James???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://mashable.com/article/netflix-broken-review"
              target="_blank"
            >
              Mashable: ???Netflix's 'Broken' is the perfect holiday weekend
              watch???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://decider.com/2019/11/29/broken-netflix-stream-it-or-skip-it/"
              target="_blank"
            >
              Decider: ???Stream It Or Skip It: ???Broken??? On Netflix, A Docuseries
              On How Rampant Consumerism Has Made The World More Dangerous???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://www.cntraveler.com/story/recap-anthony-bourdain-visits-uruguay-parts-unknownV"
              target="_blank"
            >
              Conde Nast Traveler: ???Anthony Bourdain Eats All The Meat in
              Uruguay on Parts Unknown???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://explorepartsunknown.com/uruguay/uruguay-behind-the-scenes/  "
              target="_blank"
            >
              Anthony Bourdain: Parts Unknown ??? Uruguay Episode Behind the
              Scenes ???Behind the Scenes with Ignacio Mattos, Fermin Solana and
              Steve Rivo???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://hiphopdx.com/news/id.66149/title.nas-directed-video-music-box-doc-ricky-powell-film-kick-off-showtimes-hip-hop-50-expo"
              target="_blank"
            >
              Hip-Hop DX: Nas-directed 'Video Music Box' doc & Ricky Powell film
              kick off Showtime's 'Hip Hop 50' Expo
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://www.billboard.com/music/rb-hip-hop/ralph-mcdaniels-celebrates-real-video-music-box-in-nas-directed-documentary-1235005643/"
              target="_blank"
            >
              Billboard: ???Ralph McDaniels Celebrates ???Real Deal??? Iconic Show
              ???Video Music Box??? in Nas-Directed Documentary???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://thesource.com/2021/12/04/exclusive-ralph-mcdaniels-reflects-on-the-creation-of-video-music-box/"
              target="_blank"
            >
              The Source: ???Ralph McDaniels reflects on the creation of ???Video
              Music Box??????
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://www.thewrap.com/flu-season-influenza-discovery-smallpox-ebola/"
              target="_blank"
            >
              The Wrap: ???Flu Season So Bad Discovery Just Ordered New Influenza
              Documentary??? Preview of Invisible Killers 3-part series
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://www.bostonglobe.com/arts/movies/2016/05/12/steve-rivo-tracks-carvalho-journey/lE5fTT3JQIU2UMdBZg6N1L/story.html?event=event12"
              target="_blank"
            >
              Boston Globe: Steve Rivo tracks ???Carvalho???s Journey???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://www.wsj.com/articles/recapturing-the-west-1455055097"
              target="_blank"
            >
              Wall St. Journal: ???Recapturing the West???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://forward.com/culture/film-tv/328688/these-are-the-films-to-see-at-the-25th-new-york-jewish-film-festival/ "
              target="_blank"
            >
              The Forward: ???These are the films to see at the 25th New York
              Jewish Film Festival???
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://www.huffpost.com/entry/missions-impossible_b_8227938 "
              target="_blank"
            >
              Huffington Post: Missions Impossible
            </a>
          </li>{" "}
          <br />
          <li>
            {" "}
            <a
              className="test-a"
              href="https://blogcritics.org/25th-ny-jewish-film-festival-review-carvalhos-journey-with-michael-stuhlbarg/"
              target="_blank"
            >
              Blog Critics Review: Carvalho???s Journey with Michael Stuhlbarg
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Fullpage;
