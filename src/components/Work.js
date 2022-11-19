import React, { useState } from "react";
import "../Styles/work.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import musicboxblur from "../blurred-images/musicboxblur.png";
// import Musicbox from "../routes/Musicbox.js";
const Work = () => {
  /***************************************************************************************** START FUNCTION ************************************************************ */

  const [hoverOverImage, setHoverOverImage] = useState(false);

  /********************************************************************************* END OF HOVER FUNCTION ********************************************************* */
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
            <Link to="/bitchen">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/1545519508-6cfc67ffa30fa9c5f791ad270334b0d80c07bc458057e9ad70f8cfbc8812da88-d_640x360"
                  width="500"
                  height="300"
                  alt="bithcen: The sound and fury of Rick James"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/**********bitchen funk and fury video link******* */}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box3">
            <Link to="/funkandwar">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/1525513444-0755f164dd7130350c092e1949b0e1ae22a15d625eb0f7effe247a12bb76d92b-d_640x360"
                  width="500"
                  height="300"
                  alt="bithcen: Funk and War"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />

        {/********* rollinglikethunder video link  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box4">
            <Link to="/rollinglikethunder">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/1515844583-bc11f99352daec05da8c241df1df236eba0a6fb4b0419d0fe87777d743d13f2f-d_640x360"
                  width="500"
                  height="300"
                  alt="rolling like thunder"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Broken - Trailer  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box5">
            <Link to="/broken">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/868079851-95bcde86ad10f8eab653dbacdaa4fdf54fdc96e66ee7b973255defcf8b9c40d5-d_640x360"
                  width="500"
                  height="300"
                  alt="broken"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Invisible killers ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box6">
            <Link to="/invisiblekillers">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/695668651-1e2a8131a79bbb760b10186a09d5d5eef7ef2a558c911547590f751671e0807e-d_640x360"
                  width="500"
                  height="300"
                  alt="invisible killers"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* The Vice Guide  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box7">
            <Link to="/theviceguide">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/123953243-042fd9f4309dcf2059909d400e5c280d9e1a20acc077999594dd95eb4f4f94d0-d_640x360"
                  width="500"
                  height="300"
                  alt="the vice guide to everything -Ramallah Street Racing"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Fatal Encounters  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box8">
            <Link to="/fatalencounters">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/472143267-bc4eb60f42638698dfe62db49d25d9b52999f3f9857cb7f56b74792fa519e279-d_640x360"
                  width="500"
                  height="300"
                  alt="Fatal Encounters- Terror in the woods"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* Eugene O'Neil  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box9">
            <Link to="/eugeneoneil">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/440581482-906eb347eb2d26b7eb694597e9502caaf5c39fd4aee544899b2c0e7ea708934c-d_640x360"
                  width="500"
                  height="300"
                  alt="Eugene O Neil: A documentary Film"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* New York : A documentary film  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box10">
            <Link to="/newyork">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/79643826-c82015a0a6e0c5d66bfd16e04b8753e54bb408adb28ddeff89839a4ed113ad0e-d_640x360"
                  width="500"
                  height="300"
                  alt="New York: A Documentary Film"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/********* The bottle - music video  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/thebottle">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/79556844-d97687847b52eed587b15ebef815594d481f3f42719f33a365cb9410bdce4d23-d_640x360"
                  width="500"
                  height="300"
                  alt="The bottle- Music video"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>
        <br />
        {/*********   MSNBC ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/msnbc">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/472060557-1d72e0c68e7d918c91bc0cb93e370ef419891f61057203b8ca635b3b485b7767-d_640x360"
                  width="500"
                  height="300"
                  alt="msnbc wikileaks"
                />
              </motion.button>
            </Link>
          </div>
        </AnimationOnScroll>

        {/********* broken plastics  ********/}
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="video" id="box11">
            <Link to="/plastics">
              <motion.button whileHover={{ scale: 1.1 }}>
                <img
                  src="https://i.vimeocdn.com/video/1550248684-1117dd10b15bf62969e3b7d7e5f01bd10ca6871da6168b7892f273857aebcf02-d?mw=2900&mh=1631&q=70"
                  width="500"
                  height="300"
                  alt="Broken plastics"
                />
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
                  src="https://i.vimeocdn.com/video/1550354042-1e2f6d1fae4ea4bdc9acb900c3ec4a54f94e44e88eadb736f91d3affcd2d8dbd-d?mw=2700&mh=1519&q=70"
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
                  src="https://i.vimeocdn.com/video/1550370552-a8f332c9c7c1b557fd8a6a7c8a3c9395e79df2497957931800697e6adcf0f754-d?mw=2700&mh=1519&q=70"
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
                  src="https://i.vimeocdn.com/video/1550604012-e080be73b0b0a5593b08da51764bcf5c53e4ffb4dd24447ec8bf2224a7a87cb8-d?mw=1300&mh=731"
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
                  src="https://i.vimeocdn.com/video/678335447-42834420206036f3f2ce7739e9b2ebe69a8613d88f8b035273f48a7aec07a286-d?mw=1300&mh=731"
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
