import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Testemonials = () => {
  return (
    <section id="testimonials" className="my-[10rem] min-w-full">
      <h1 className="body_header mb-10">
        My <span className="gradient_color">License</span> and{" "}
        <span className="gradient_color">Certificates</span>
      </h1>
      <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testemonials;
