import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { fakeContent } from "../../constants";


gsap.registerPlugin(ScrollSmoother, SplitText, ScrollTrigger);
export const HeroSection = () => {
  useGSAP(()=>{

  },[])
  return (
    <section>
      <header></header>
      <div></div>
    </section>
  )
}
