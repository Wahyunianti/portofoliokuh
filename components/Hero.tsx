import { Spotlight } from "./ui/Spotlight";
import { BgText } from "./BgText";
import HeroSectionText from "./HeroSectionText";

const Hero = () => {
  return (
    <section className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_4%,black)]"></div>
      </div>

      <HeroSectionText />
      <BgText />
    </section>
  );
};

export default Hero;
