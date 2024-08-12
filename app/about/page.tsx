import { Link } from "@nextui-org/link";

import AboutImage from "@/components/about/about-image";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <>
      <div className="md:flex justify-center items-center xl:px-10">
        <div className="md:flex-1 md:w-64">
          <AboutImage />
        </div>
        <div className="md:flex-1 md:w-32 text-center md:text-end">
          <p className="font-mono py-3">
            “Photography isn’t just about beautiful images: <br /> it’s the
            narration of the essence of my soul,
            <br /> and a way of seeing beauty in everything.”
          </p>
          <h2 className={title()}>
            <span className="font-bold shadow-sm underline">
              Thahnan Ferdous
            </span>
          </h2>
          <p className={subtitle()}>
            Hello, I’m Thahnan Ferdous, a photographer from Dhaka, Bangladesh. I
            believe that my work speaks for me, reflecting both my past and my
            current state of mind. I’m an explorer at heart, drawn to uncharted
            places. and I believe that photography gets better with practice.
            join me on this visual adventure, where each image tells a story and
            reveals the way I view the world.
          </p>
          <div className="flex gap-2 justify-end ">
            <p>Follow Me On:</p>
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
            >
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="Behance"
              href={siteConfig.links.behance}
            >
              <GithubIcon className="text-default-500" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
