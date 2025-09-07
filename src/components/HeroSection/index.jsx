import { Flip, ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CatIcon from "../../assets/logo.svg?react"
import "./HeroSection.scss";
import { useRef, useState } from "react";
import { heroSliderCont } from "../../constants";
gsap.registerPlugin(Flip, ScrollSmoother, SplitText, ScrollTrigger);

export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);
  const iconWrapperRef = useRef(null);
  const loadingSectionRef = useRef(null);
  const sliderSectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    const iconEle = iconWrapperRef.current?.firstElementChild;
    const state = Flip.getState(iconEle);

    gsap.to(loaderRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        // Move logo
        document.querySelector(".iconWrapper")?.appendChild(iconEle);

        // Animate logo with Flip
        Flip.from(state, {
          duration: 2,
          ease: "power2.inOut",
          absolute: true,
          scale: true,
          zIndex: 10000,
        });

        // Hide loader
        gsap.to(loadingSectionRef.current, {
          duration: 1,
          opacity: 0,
          // display: "none",
          ease: "power1.inOut",
        });

        setIsLoading(false);
      },
    });

    if (!isLoading) {
      // 🔥 Hero slider animation
      const slides = gsap.utils.toArray(".slideContainer");

      slides.forEach((slide, i) => {
        const img = slide.querySelector(".sliderImg");
        const text = slide.querySelector(".sliderTitle");

        gsap.set(img, {
          clipPath: "inset(0 50% 0 50%)", // start hidden in the center line
        });

        tl.to(img, {
          clipPath: "inset(0 0% 0 0%)", // reveal from center line
          duration: 1,
          ease: "power4.out",
        })
          .from(
            text,
            {
              opacity: 0,
              y: 100,
              duration: 1,
              ease: "power2.out",
            },
            "-=1" // overlap with image
          )
          .to(
            img,
            {
              clipPath:
                i % 2 === 0
                  ? "inset(0 100% 0 0)" // exit to right
                  : "inset(0 0 0 100%)", // exit to left
              duration: 3,
              ease: "power4.in",
            }
            // "+=2" // wait before exit
          )
          .to(
            text,
            {
              opacity: 0,
              y: -50,
              duration: 1,
              ease: "power2.in",
            },
            "-=1"
          );
      });
      tl.repeat(-1).repeatDelay(0); // infinite loop
    }

  }, [isLoading]);

  return (
    <section className="heroSection">
      {/* Loading Section */}
      <section className="loadingModal" ref={loadingSectionRef}>
        <div className="logoWrapper" ref={iconWrapperRef}>
          <CatIcon />
        </div>
        <div className="lSWrapper">
          <div className="loadingSpinner">
            <div className="loader" ref={loaderRef} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mainHeroSection" ref={sliderSectionRef}>
        <header className="header">
          <div className="iconWrapper"></div>
        </header>
        <div className="heroSliderWrapper">
          {heroSliderCont.map((slide, index) => (
            <div className="slideContainer" key={slide.title + index}>
              <h1 className="sliderTitle">{slide.title}</h1>
              <img className="sliderImg" src={slide.src} alt={slide.title} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};











