"use client";
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "./background-beams";
import { GridGlobe } from "../GirdGLobe";
import { HoverBorderGradient } from "./hover-border-gradient";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string;
  description?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const left = ["HTML", "CSS", "Javascript", " "];
  const right = ["PHP", "Next.js", "Tailwind css", " "];

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Img Divs */}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {/*  */}

        {/* Gradient bg for id of 6 */}
        {id === 6 && <BackgroundBeams />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* desc */}
          <div
            className={`${
              id === 5 && " pr-[5rem] lg:pr-[20rem]"
            } font-sans font-extralight z-10 text-neutral-600 lg:text-base md:text-xs text-sm dark:text-neutral-300 `}
          >
            {description}
          </div>
          {/* title */}
          <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}
          
          {id === 3 && (
            <div className="text-base sm:text-lg">
              <ul className="gap-y-3 lg:gap-y-5 flex flex-col justify-end absolute left-[45%] top-3 ">
                {left.map((item, i) => (
                  <li
                    className="bg-zinc-800 px-2 py-3 rounded-[.4rem] text-center"
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="gap-y-3 lg:gap-y-5 flex flex-col justify-end absolute left-[75%] top-0">
                {right.map((item, i) => (
                  <li
                    className="bg-zinc-800 px-2 py-3 rounded-[.4rem] text-center"
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/*  */}
        </div>
      </div>
    </div>
  );
};
