import { useGSAP } from "@gsap/react";
import { fakeContent } from "../../constants";
import "./AboutSection.scss";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import SecImgSrc from "../../assets/images/img3.jpg";
import { Canvas } from "@react-three/fiber";
import { Scene } from "../CubesBackground";
import { animateGrayToWhiteText } from "../../utils/animations";

export const AboutSection = () => {
  const longTextRef = useRef();

  gsap.registerPlugin(ScrollSmoother, SplitText, ScrollTrigger);
  useGSAP(() => {
    const titleSplit = SplitText.create("#aboutTitle");
    const split = SplitText.create("#text");
    const longSplit = SplitText.create("#longText");
    const secTitleSplit = SplitText.create("#secSectionTitle");

    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });

    gsap.from(titleSplit.chars, {
      // opacity: 0,
      y: -100,
      autoAlpha: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".aboutSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 40%",
        end: "bottom 80%",
        // markers: true,
      },
    });

    gsap.from(split.chars, {
      color: "gray",
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".aboutSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 80%",
        end: "bottom 80%",
        // markers: true,
      },
    });

    gsap.from(secTitleSplit.chars, {
      // opacity: 0,
      y: -100,
      autoAlpha: 0,
      stagger: 0.05,
      delay: 1,
      scrollTrigger: {
        trigger: longTextRef.current,
        start: "top 10%",
        scrub: true,
        // end:'bottom 20%',
        // markers: true,
      },
    });

    gsap.from("#aboutImg", {
      rotate: -180,
      scale: 0.2,
      opacity: 0,
      x: 400,
      scrollTrigger: {
        trigger: longTextRef.current,
        scrub: true,
        start: "top 20%",
        // markers: true,
      },
    });

    animateGrayToWhiteText(longSplit.chars, longTextRef.current);
  }, []);
  return (
    <section className="aboutSection">
      <div data-lag={2} id="cubeCanvas" className="cubeCanvas">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>
      <div className="titleTextSection">
        <h1 id="aboutTitle">About Us</h1>
        <p id="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
          arcu vel magna tincidunt aliquam. Suspendisse potenti. Integer
          lacinia, justo sit amet egestas porta, lorem urna ultrices nibh, sed
          tincidunt felis augue sed erat. Vivamus vestibulum libero sit amet sem
          ultricies, a placerat massa fringilla.
        </p>
      </div>
      <div className="secSectionWrapper" ref={longTextRef}>
        <h1 id="secSectionTitle">{fakeContent.titles[0]}</h1>
        <div className="imgTextWrapper">
          <p id="longText">{fakeContent.mediumText[1]}</p>
          <img
            data-lag="0.5"
            id="aboutImg"
            src={SecImgSrc}
            alt="second Img"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};
