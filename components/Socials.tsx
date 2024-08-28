/* eslint-disable @next/next/no-img-element */
import { socials } from "@/data";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-3">
      {socials.map((social) => (
        <Link
          target="_blank"
          key={social.id}
          className=" bg-zinc-700 p-1 rounded-full"
          href={social.href}
        >
          <img width={18} height={18} alt={social.alt} src={social.logo} />
        </Link>
      ))}
    </div>
  );
}
