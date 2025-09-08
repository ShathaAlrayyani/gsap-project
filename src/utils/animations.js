import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateGrayToWhiteText = (target, scrollTarget) => {
  gsap.from(target, {
    color: "gray",
    stagger: 0.03,
    scrollTrigger: {
      trigger: scrollTarget,
      start: "top 10%",
    //   end: "bottom 80%",
    //   markers: true,
      scrub: true,
      pin: true,
    },
  });
};
