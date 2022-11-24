import React, { useState } from "react";
import "../Styles/work.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import musicboxblur from "../blurred-images/musicboxblur.jpg";
import bitchenblur from "../blurred-images/bitchenblur.jpg";
import funkblur from "../blurred-images/funkblur.jpg";
import brokenblur from "../blurred-images/brokenblur.jpg";
import thunderblur from "../blurred-images/thunderblur.jpg";
import invisiblekillersblur from "../blurred-images/invisiblekillersblur.jpg";
import viceguideblur from "../blurred-images/viceguideblur.jpg";
import fatalencountersblur from "../blurred-images/fatalencountersblur.jpg";
import newyorkblur from "../blurred-images/newyorkblur.jpg";
import eugeneblur from "../blurred-images/eugeneblur.jpg";
import bottleblur from "../blurred-images/bottleblur.jpg";
import msnbcblur from "../blurred-images/msnbcblur.jpg";
import plasticsblur from "../blurred-images/plasticsblur.jpg";
// import Musicbox from "../routes/Musicbox.js";
const Work = () => {
  /***************************************************************************************** START FUNCTION ************************************************************ */

  const [hoverOverImage, setHoverOverImage] = useState(false);
  const [hoverOverImageTwo, setHoverOverImageTwo] = useState(false);
  const [hoverOverImageThree, setHoverOverImageThree] = useState(false);
  const [hoverOverImageFour, setHoverOverImageFour] = useState(false);
  const [hoverOverImageFive, setHoverOverImageFive] = useState(false);
  const [hoverOverImageSix, setHoverOverImageSix] = useState(false);
  const [hoverOverImageSeven, setHoverOverImageSeven] = useState(false);
  const [hoverOverImageEight, setHoverOverImageEight] = useState(false);
  const [hoverOverImageNine, setHoverOverImageNine] = useState(false);
  const [hoverOverImageTen, setHoverOverImageTen] = useState(false);
  const [hoverOverImageEleven, setHoverOverImageEleven] = useState(false);
  const [hoverOverImageTwelve, setHoverOverImageTwelve] = useState(false);
  const [hoverOverImageThirteen, setHoverOverImageThirteen] = useState(false);
  const [hoverOverImageFourteen, setHoverOverImageFourteen] = useState(false);
  const [hoverOverImageFifteen, setHoverOverImageFifteen] = useState(false);
  const [hoverOverImageSixteen, setHoverOverImageSixteen] = useState(false);
  const [hoverOverImageSeventeen, setHoverOverImageSeventeen] = useState(false);
  const [hoverOverImageEighteen, setHoverOverImageEighteen] = useState(false);
  const [hoverOverImageNineteen, setHoverOverImageNineteen] = useState(false);
  const [hoverOverImageTwenty, setHoverOverImageTwenty] = useState(false);
  const [hoverOverImageTwentyone, setHoverOverImageTwentyone] = useState(false);
  const [hoverOverImageTwentytwo, setHoverOverImageTwentytwo] = useState(false);
  /************************************************************************* END OF HOVER FUNCTION ********************************************************* */
  return (
    <motion.div
      className="motion"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <div data-aos="fade-up" className="video-wrap">
        {/************  music box video link *******/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video">
            <Link
              to="/musicbox"
              onMouseEnter={() => setHoverOverImage(true)}
              onMouseLeave={() => setHoverOverImage(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImage ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={musicboxblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/1515835744-60ad080c7a0d6e522debf733183c6faaceb4a61be6d6140a5a46388f3e56beb4-d_640x360"
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>

        <br />
        {/********* bitchen video link  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box2">
            <Link
              to="/bitchen"
              onMouseEnter={() => setHoverOverImageTwo(true)}
              onMouseLeave={() => setHoverOverImageTwo(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageTwo ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={bitchenblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/1545519508-6cfc67ffa30fa9c5f791ad270334b0d80c07bc458057e9ad70f8cfbc8812da88-d_640x360"
                    width="500"
                    height="300"
                    alt="bithcen: The sound and fury of Rick James"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/**********bitchen funk and fury video link******* */}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box3">
            <Link
              to="/funkandwar"
              onMouseEnter={() => setHoverOverImageThree(true)}
              onMouseLeave={() => setHoverOverImageThree(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageThree ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={funkblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/1525513444-0755f164dd7130350c092e1949b0e1ae22a15d625eb0f7effe247a12bb76d92b-d_640x360"
                    width="500"
                    height="300"
                    alt="bithcen: Funk and War"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* BEGINNING OF ROW 2 - ANTHONEY BORDAIN KAYAK FISHING ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/kayakfishing">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.ibb.co/Nr38xns/PUAB-Drive-Thru-Steak-small-000004.jpg"
                  width="500"
                  height="300"
                  alt="puab kayak fishing"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Broken - Trailer  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box5">
            <Link
              to="/broken"
              onMouseEnter={() => setHoverOverImageFive(true)}
              onMouseLeave={() => setHoverOverImageFive(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageFive ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={brokenblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/868079851-95bcde86ad10f8eab653dbacdaa4fdf54fdc96e66ee7b973255defcf8b9c40d5-d_640x360"
                    width="500"
                    height="300"
                    alt="broken"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* ENDING OF ROW 2 - ANTHONEY BORDAIN DRIVE THRU STREAK ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/drivethrustreak">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.ibb.co/tMCgnSJ/PUAB-Drive-Thru-Steak-small-000258.jpg"
                  width="500"
                  height="300"
                  alt="drive thru streak"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* rollinglikethunder video link  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box4">
            <Link
              to="/rollinglikethunder"
              onMouseEnter={() => setHoverOverImageSeven(true)}
              onMouseLeave={() => setHoverOverImageSeven(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageSeven ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={thunderblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/1515844583-bc11f99352daec05da8c241df1df236eba0a6fb4b0419d0fe87777d743d13f2f-d_640x360"
                    width="500"
                    height="300"
                    alt="rolling like thunder"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Invisible killers ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box6">
            <Link
              to="/invisiblekillers"
              onMouseEnter={() => setHoverOverImageTen(true)}
              onMouseLeave={() => setHoverOverImageTen(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageTen ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={invisiblekillersblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/695668651-1e2a8131a79bbb760b10186a09d5d5eef7ef2a558c911547590f751671e0807e-d_640x360"
                    width="500"
                    height="300"
                    alt="invisible killers"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* The Vice Guide  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box7">
            <Link
              to="/theviceguide"
              onMouseEnter={() => setHoverOverImageSixteen(true)}
              onMouseLeave={() => setHoverOverImageSixteen(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageSixteen ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={viceguideblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/1551540383-0b6a357ef1d15ec23fce34b06c5a6a6b043489f7c7bd717b4c6aafe3152f513c-d?mw=2200&mh=1650&q=70"
                    width="500"
                    height="300"
                    alt="the vice guide to everything -Ramallah Street Racing"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Fatal Encounters  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box8">
            <Link
              to="/fatalencounters"
              onMouseEnter={() => setHoverOverImageEighteen(true)}
              onMouseLeave={() => setHoverOverImageEighteen(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageEighteen ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={fatalencountersblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/1551538869-3cf74bbe879d587eed515c404dcdc2584224f16d7e7a176e9037598b3f639519-d?mw=500&mh=303&q=70"
                    width="500"
                    height="300"
                    alt="Fatal Encounters- Terror in the woods"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Eugene O'Neil  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box9">
            <Link
              to="/eugeneoneil"
              onMouseEnter={() => setHoverOverImageTwentyone(true)}
              onMouseLeave={() => setHoverOverImageTwentyone(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageTwentyone ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={eugeneblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/440581482-906eb347eb2d26b7eb694597e9502caaf5c39fd4aee544899b2c0e7ea708934c-d_640x360"
                    width="500"
                    height="300"
                    alt="Eugene O Neil: A documentary Film"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* New York : A documentary film  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box10">
            <Link
              to="/newyork"
              onMouseEnter={() => setHoverOverImageTwenty(true)}
              onMouseLeave={() => setHoverOverImageTwenty(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageTwenty ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={newyorkblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/79643826-c82015a0a6e0c5d66bfd16e04b8753e54bb408adb28ddeff89839a4ed113ad0e-d_640x360"
                    width="500"
                    height="300"
                    alt="New York: A Documentary Film"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* The bottle - music video  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link
              to="/thebottle"
              onMouseEnter={() => setHoverOverImageTwentytwo(true)}
              onMouseLeave={() => setHoverOverImageTwentytwo(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageTwentytwo ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={bottleblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/79556844-d97687847b52eed587b15ebef815594d481f3f42719f33a365cb9410bdce4d23-d_640x360"
                    width="500"
                    height="300"
                    alt="The bottle- Music video"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/*********   MSNBC ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link
              to="/msnbc"
              onMouseEnter={() => setHoverOverImageNineteen(true)}
              onMouseLeave={() => setHoverOverImageNineteen(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageNineteen ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={msnbcblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/1548916058-321c32f8c19d9f36421fc3cb9fd80621d88d2b0365456df81d214aeaeb3611c9-d?mw=2500&mh=1406&q=70"
                    width="500"
                    height="300"
                    alt="msnbc wikileaks"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>

        {/********* broken plastics  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link
              to="/plastics"
              onMouseEnter={() => setHoverOverImageNine(true)}
              onMouseLeave={() => setHoverOverImageNine(false)}
            >
              <motion.button whileHover={{ scale: 1.1 }}>
                {hoverOverImageNine ? (
                  <img
                    style={{ cursor: "pointer" }}
                    className="work-videos"
                    src={plasticsblur}
                    width="500"
                    height="300"
                    alt="youre watching video music box"
                  />
                ) : (
                  <img
                    src="https://i.vimeocdn.com/video/1552156131-a9c84c830c6e6ddce8bb3359433dadbc4f15db8359242f6617228f4f5416e225-d?mw=1300&mh=731"
                    width="500"
                    height="300"
                    alt="Broken plastics"
                  />
                )}
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* carvalhos journey ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/carvalhos">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/1552157766-7460106fbce3b0503f4fe8b561dc951433bee85e24de17664de9044d169e0774-d?mw=1300&mh=731"
                  width="500"
                  height="300"
                  alt="carvalhos journey"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* drs exoneration ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/exoneration">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/1548876662-b7c79a8a5582454cdd41a12c5eefc759d683b2c42fe8d3127d5bf44bbb8bb310-d?mw=2700&mh=1519&q=70"
                  width="500"
                  height="300"
                  alt="exoneration"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* broken -deadly dressers ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/deadlydressers">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/1548903243-c3b6acc6d892a91e23f7d9b1e0b8dac3660c370e89090670178b0dd69de64a07-d?mw=1300&mh=731"
                  width="500"
                  height="300"
                  alt="broken - deadly dressers"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* ivisible killers, influenza ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/influenza">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/824633152-07ed18f68b424b65d4d252b407c4b879ec1b450b7bc77263c2693797420ce91e-d?mw=1300&mh=731"
                  width="500"
                  height="300"
                  alt="invisible killers influenza"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* ivisible killers, smallpox ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/smallpox">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/1550598339-866cc5d3b7e57cd471f02c7a7318f7accede75b41db899fde7e4171738372f31-d?mw=1300&mh=731"
                  width="500"
                  height="300"
                  alt="invisible killers smallpox"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Trulnside: Heathers ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/heather">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/578591857-66604cc86985f52d2dc7a42a108aa91edd7f9c8fc1e1c84fdf9cd355540f844f-d?mw=1300&mh=731"
                  width="500"
                  height="300"
                  alt="TruInside Heathers"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Morgan spurlock - inside man csi bomb training ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/insideman">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/678335965-c7716b3487c06d845898f4d1df7243173f7d2aca45323c5f05c8de16fae4b706-d?mw=1300&mh=731"
                  width="500"
                  height="300"
                  alt="Morgan Spurlock - Inside Man"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
      </div>
    </motion.div>
  );
};

export default Work;
