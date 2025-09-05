import { useEffect, useRef } from "react";
import "./LoadingSection.scss";
import LogoIcon from "../../assets/catOrigami.svg?react";
import gsap from "gsap";

export const LoadingSection = () => {
  const loaderRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    if (!loaderRef.current || !sectionRef.current) return;

    // 1️⃣ Animate loader width (0 -> 100%)
    gsap.to(loaderRef.current, {
      width: "100%",
      duration: 4,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(sectionRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          display:'none',
        });
      },
    });
  }, []);

  return (
    <section className="loadingSection" ref={sectionRef}>
      <div className="logoWrapper">
        <LogoIcon />
      </div>
      <div className="lSWrapper">
        <div className="loadingSpinner">
          <div className="loader" ref={loaderRef} />
        </div>
      </div>
    </section>
  );
};
