import "./ProjectsSection.scss";
import FirstImgSrc from "../../assets/images/img1.jpg";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { fakeContent } from "../../constants";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ProjectsSection = () => {
  const imgWrapperRef = useRef();
  useGSAP(() => {
    const split = SplitText.create("#grayText");
    gsap.to(split.chars, {
      scrollTrigger: {
        target: imgWrapperRef.current,
        color: "white",
        stagger: 1,
      },
    });
  }, []);
  return (
    <section className="projectsSection">
      <div>
        <p id="grayText">{fakeContent.mediumText}</p>
      </div>
      <div className="imgsWrapper" ref={imgWrapperRef}>
        <img id="firstImg" src={FirstImgSrc} alt="" />
        <img id="secImg" src={FirstImgSrc} alt="" />
      </div>
    </section>
  );
};
