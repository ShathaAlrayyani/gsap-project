import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import "./App.scss";
import { AboutSection, HeroSection, ProjectsSection } from "./components";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 1,
    });

    smoother.paused(true);

    setTimeout(() => {
      smoother.paused(false);
    }, 4000);

    const wrapper = document.querySelector("#smooth-content");
    if (wrapper) {
      const sections = Array.from(wrapper.children);
      sections.forEach((section) => {
        const color = section.getAttribute("data-bg");
        ScrollTrigger.create({
          trigger: section,
          start: "top 30%",
          end: "bottom 70%",
          // markers:true,
          onEnter: () =>
            gsap.to(".appWrapper", { backgroundColor: color, duration: 1 }),
          onEnterBack: () =>
            gsap.to(".appWrapper", { backgroundColor: color, duration: 1 }),
        });
      });
    }
  }, []);

  return (
    <main className="appWrapper">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <div>
            <AboutSection />
          </div>
          {/* <div data-lag="1">
            <ProjectsSection />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default App;
