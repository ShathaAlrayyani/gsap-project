import "./ProjectsSection.scss";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import {
  eighthImgSrc,
  fakeContent,
  fifthImgSrc,
  ninthImgSrc,
  seventhImgSrc,
  sixthImgSrc,
  tenthImgSrc,
} from "../../constants";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ProjectsSection = () => {
  const imgWrapperRef = useRef(null);
  const containerRef = useRef(null);
  useGSAP(() => {
    const allImgs = gsap.utils.toArray(".imgCont");

    gsap.from("#projectsTitle", {
      x: -400,
      duration: 1,
      scrollTrigger: {
        trigger: "#projectsText",
        start: "top 85%",
        end: "bottom 30%",
        scrub: true,
        // markers: true,
      },
    });

    gsap.from("#projectSubtitle", {
      x: 300,
      duration: 1,
      scrollTrigger: {
        trigger: "#projectsText",
        start: "top 85%",
        end: "bottom 30%",
        scrub: true,
        // markers: true,
      },
    });

    allImgs.map((img) => {
      gsap.from(img, {
        opacity: 0,
        rotate: 45,
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          end: "bottom 30%",
          scrub: true,
          // markers: true,
        },
      });
    });
  }, []);
  return (
    <section className="projectsSection" ref={containerRef}>
      <div id="projectsText">
        <div className="leftLine"></div>
        <div className="rightLine"></div>
        <h1 className="projectsTitle" id="projectsTitle">
          Projects
        </h1>
        <h1 className="subTitle" id="projectSubtitle">
          {fakeContent.titles[1]}
        </h1>
      </div>
      <div className="imgsWrapper" ref={imgWrapperRef}>
        <div className="imgCont left">
          <img
            className="projectsImg"
            src={fifthImgSrc}
            alt="img"
            data-speed="auto"
          />
        </div>
        <div className="imgCont center">
          <img
            className="projectsImg"
            src={sixthImgSrc}
            alt="img"
            data-speed="auto"
          />
        </div>
        <div className="imgCont right">
          <img
            className="projectsImg"
            src={seventhImgSrc}
            alt="img"
            data-speed="auto"
          />
        </div>
        <div className="imgCont center">
          <img
            className="projectsImg"
            src={eighthImgSrc}
            alt="img"
            data-speed="auto"
          />
        </div>
        <div className="imgCont left">
          <img
            className="projectsImg"
            src={ninthImgSrc}
            alt="img"
            data-speed="auto"
          />
        </div>
        <div className="imgCont center">
          <img
            className="projectsImg"
            src={tenthImgSrc}
            alt="img"
            data-speed="auto"
          />
        </div>
      </div>
    </section>
  );
};
