import React, { useEffect } from "react";
import "./css/index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "./parallax_img/Parallaximg";
import { Parallax, Background } from "react-parallax";
import jQuery from "jquery";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="home">
      <Parallax
        blur={1}
        bgImage="https://media.istockphoto.com/photos/pollution-concept-garbage-pile-in-trash-dump-or-landfill-at-sunset-picture-id840623304?k=20&m=840623304&s=612x612&w=0&h=wpfZk0Jz3puVExChfGPWxO6yi9VIFMAMrgsi5TEwtYw="
        bgImageAlt="the cat"
        className="idk"
      ></Parallax>
      <p className="p1">
        <h1 data-aos="slide-right">What Are Landfill Emmisions?</h1>
        <br />
        <p className="p2" data-aos="slide-right">
          The degradation of waste in the landfill results in the production of
          leachate and gases. These emissions are potentials threats to human
          health and to the quality of the environment. Landfill gas consist
          mainly of methane and CO2 (carbon dioxide), both important greenhouse
          gases.
        </p>
      </p>

      <Parallax
        blur={1}
        bgImage="https://cdn.hswstatic.com/gif/landfill-update.jpg"
        bgImageAlt="the cat"
        className="idk"
      ></Parallax>
      <p className="p1">
        <h1 data-aos="slide-right">How Do They Affect he Environment?</h1>
        <br />
        <p className="p2" data-aos="slide-left">
          The gases produced by landfills are extremely dangerous both to
          human’s and environment’s health.These gases trap the heat,are
          dangerous to our health ,trash buried in landfills break down very
          slowly and remain a problem for a long time.Landfill gas consist
          mainly of methane and CO2 (carbon dioxide), both important greenhouse
          gases
        </p>
      </p>
      <Parallax
        blur={1}
        bgImage="https://www.naue.com/app/uploads/2021/10/Landfill-Regulations.jpg"
        bgImageAlt="the cat"
        className="idk"
      ></Parallax>
      <p className="p1">
        <h1 data-aos="slide-right">What is the need for awareness in citizens about Landfill Emissions?</h1>
        <br />
        <p className="p2">
        It is the citizens of a country that hold the power of doing anything. Only the educated people can make a change. So, When given the right information, they can reduce landfill emissions by taking necessary steps. They also influence others into joining the act. This way, they can segragate the waste at large scales and make a major impact.
        </p></p>
      

      {/* <div class="parallax-window" data-parallax="scroll" data-image-src="http://www.fillmurray.com/500/320"></div>
    <p className="p1">Content goes here. Parallax height grows with content height.</p>
    <div class="parallax-window" data-parallax="scroll" data-image-src="https://cdn.hswstatic.com/gif/landfill-update.jpg"></div>
    <p className="p1">Content goes here. Parallax height grows with content height.</p>
    <div class="parallax-window" data-parallax="scroll" data-image-src="https://cdn.hswstatic.com/gif/landfill-update.jpg"></div>
    <p className="p1">Content goes here. Parallax height grows with content height.</p> */}
    </div>
  );
}

export default Home;
