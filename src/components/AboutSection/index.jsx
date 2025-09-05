// import { fakeContent } from "../../constants";
import { useGSAP } from "@gsap/react";
import { fakeContent } from "../../constants";
import "./AboutSection.scss";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import SecImgSrc from "../../assets/images/img3.jpg";

export const AboutSection = () => {
  const textWrapperRef = useRef();
  const longTextRef = useRef();

  gsap.registerPlugin(ScrollSmoother, SplitText, ScrollTrigger);
  useGSAP(() => {
    let split = SplitText.create("#text");
    const longSplit = SplitText.create("#longText");

    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 1,
    });

    const tl = gsap.timeline();
    tl.from(split.chars, {
      color: "gray",
      stagger: 0.05,
      scrollTrigger: {
        trigger: textWrapperRef.current,
        scrub: true,
        start: "top 20%",
        pin: true,
        // markers: true,
      },
    });

    tl.from("#secImg", {
      rotate: -45,
      scrollTrigger: {
        trigger: textWrapperRef.current,
        scrub: true,
        start: "top 30%",
        end: "bottom 80%",
        // markers: true,
      },
    });

    tl.from(longSplit.chars, {
      color: "gray",
      opacity: 0,
      y: 20,
      autoAlpha: 0,
      stagger: {
        from: "random",
        amount: 2,
      },
      scrollTrigger: {
        trigger: longTextRef.current,
        scrub: true,
        pin:true,
        start: "top 20%",
        end: "bottom 80%",
      },
    });
  }, []);
  return (
    <section className="aboutSection">
      <h1>About Us</h1>
      <div ref={textWrapperRef} id="textWrapper">
        <p id="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Phasellus vel arcu vel magna tincidunt aliquam. Suspendisse potenti.
          <br />
          Integer lacinia, justo sit amet egestas porta, lorem urna ultrices
          <br />
          nibh, sed tincidunt felis augue sed erat. Vivamus vestibulum libero
          <br />
          sit amet sem ultricies, a placerat massa fringilla.
        </p>

        <img
          id="secImg"
          src={SecImgSrc}
          alt="second Img"
          width={300}
          height={300}
        />
        <p ref={longTextRef} id="longText">
          {fakeContent.mediumText}
        </p>
      </div>
      <div></div>
    </section>
  );
};
