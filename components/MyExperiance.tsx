import ProjectsCardSection from "./ProjectsCardSection";

const MyExperiance = () => {
  return (
    <section id="experiance" className="mt-10 py-10">
      {/* $ */}
      <h1 className="body_header">
        My <span className="gradient_color">Experience</span>
      </h1>
      {/* $ */}
      <div className="sm:flex hidden absolute left-[30%] top-[30%] ">
        <h2 className="text-[11rem] opacity-[0.05] font-extrabold bg-zinc-600 text-center p-3 capitalize ">
          &quot;Experience&quot;
        </h2>
      </div>
      {/* $ */}
      <ProjectsCardSection />
    </section>
  );
};

export default MyExperiance;
