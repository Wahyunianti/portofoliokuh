import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { myApproach } from "@/data";
import { Card } from "./Card";

const Approach = () => {
  return (
    <section id="approach" className=" my-10 p-10">
      <h1 className="body_header">
        My <span className="gradient_color">Approach</span>
      </h1>

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-6 mx-auto ">
        {myApproach.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            desc={item.desc}
            phase={item.phase}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              colors={item.colors}
              containerClassName={item.containerClassName}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Approach;
