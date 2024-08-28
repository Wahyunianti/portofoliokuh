import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSectionText = () => {
  const words = ["software engineer", "fullstack developer"];

  return (
    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Let me introduce myself
        </p>

        <div className="my-5">
          <h1 className="hero_header capitalize">
            My name is Wahyuni, I am a <br /> <FlipWords words={words} />
            from Kediri, East Java
          </h1>
        </div>
        <p className="text-center text-[.7rem] sm:text-[1.2rem] leading-relaxed text-blue-100">
        I design and implement solutions to problems in society into application systems based on website and mobile platforms.
        </p>

        <a href="#about" className="mt-10">
          <HoverBorderGradient>Next</HoverBorderGradient>
        </a>
      </div>
    </div>
  );
};

export default HeroSectionText;
