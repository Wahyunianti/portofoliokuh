import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

export function About() {
  return (
    <section id="about" className="py-20 mt-20 relative">
      {" "}
      <BentoGrid className="max-w-6xl mx-auto">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}
