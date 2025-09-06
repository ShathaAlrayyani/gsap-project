import { useGSAP } from "@gsap/react";
import { fakeContent } from "../../constants";
import "./AboutSection.scss";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import SecImgSrc from "../../assets/images/img3.jpg";

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

    // const tl = gsap.timeline();
    gsap.from(titleSplit.chars, {
      // opacity: 0,
      y: -100,
      autoAlpha: 0,
      stagger: 0.05,
      delay: 1,
      scrollTrigger: {
        trigger: ".aboutSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 95%",
        end: "bottom bottom",
        // markers: true,
      },
    });

    gsap.from(split.chars, {
      color: "gray",
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".aboutSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 40%",
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
        start: "top 20%",
        scrub:true,
        // end:'bottom 20%',
        // markers: true,
      },
    });

    gsap.from("#secImg", {
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

    gsap.from(longSplit.chars, {
      color: "gray",
      opacity: 0,
      y: 50,
      autoAlpha: 0,
      stagger: {
        from: "random",
        amount: 2,
      },
      scrollTrigger: {
        trigger: longTextRef.current,
        scrub: true,
        pin: true,
        start: "top 20%",
      },
    });
  }, []);
  return (
    <section className="aboutSection">
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
            id="secImg"
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
