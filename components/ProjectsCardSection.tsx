/* eslint-disable @next/next/no-img-element */
import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/data/index";

const ProjectsCardSection = () => {
  return (
    <div className="flex-wrap flex items-center justify-center gap-y-5 xl:gap-y-10 lg:gap-x-[7rem] relative">
      {projects.map((project) => (
        <div
          key={project.id}
          className="sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[540px] w-[100vw] "
        >
          <PinContainer title="visit" href={project.link || "/"}>
            <div className="flex flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] sm:w-[35rem] h-[30rem] ">
              {/* Bg image */}

              {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}

              <div className="relative w-full h-full overflow-hidden rounded-3xl opacity-40 transition-all hover:opacity-90">
                <img alt="Project Image" src={project.img} />
              </div>

              {/* rest of the card content */}
              <div className="my-2 flex justify-between ">
                <h3 className="font-bold text-xl text-[white]">
                  {project.title}
                </h3>
                <p className="card_para">{project.role}</p>
              </div>

              {/* card desc */}
              <p className="text-slate-500 text-sm mb-2">{project.des}</p>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {project.iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="flex justify-center items-center rounded-full bg-black-300 p-3"
                    >
                      <img
                        src={icon}
                        width={15}
                        height={15}
                        alt="Technology Used"
                      />
                    </div>
                  ))}
                </div>

                <p className="card_para text-blue-600 capitalize">Visit us.</p>
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCardSection;
