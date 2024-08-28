import React from "react";
import SocialLinks from "./Socials";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { footerData } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative mb-[16rem] sm:mb-[20rem] pb-20 pt-36 h-96"
    >
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.09] bg-grid-black/[0.2] absolute -top-[40%] left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_4%,black)]"></div>
      </div>

      <div className="relative">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="body_header">{footerData.title}</h1>
          <p className="text-base text-center max-w-4xl font-extralight w-full tracking-wider capitalize">
            {footerData.desc}
          </p>

          <Link href="https://wa.me/+6281946174344/" target="_blank">
            <HoverBorderGradient className=" capitalize">
              Wa.me/Wahyuni
            </HoverBorderGradient>
          </Link>

          <div className="sm:flex-row flex-col gap-8 flex justify-between items-center w-full px-4 sm:mt-[12rem] mt-[3rem] mb-4">
            <p className="text-left text-xs font-medium">
              by Wahyuni Anti
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
