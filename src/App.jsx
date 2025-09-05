import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import "./App.scss";
import { AboutSection, HeroSection, ProjectsSection } from "./components";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch:1,
    });

    const wrapper = document.querySelector("#smooth-content");
    if (wrapper) {
      const sections = Array.from(wrapper.children);
      sections.forEach((section) => {
        const color = section.getAttribute("data-bg");
        ScrollTrigger.create({
          trigger: section,
          start: "top 30%",
          end: "bottom 70%",
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
      {/* <LoadingSection /> */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div data-bg="gray" >
            <HeroSection />
          </div>
          <div data-bg="gray" >
            <AboutSection />
          </div>
          {/* <div data-bg="#9b59b6" >
            <ProjectsSection />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default App;
