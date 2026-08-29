import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroData } from "@/types";

interface HeroProps {
  hero: HeroData;
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  return (
    <section className="container mx-auto pt-28 pb-14" id="about">
      <div className="flex justify-between portrait:flex-wrap-reverse flex-nowrap gap-8 items-center">
        <div className="my-auto w-full md:w-3/5">
          <h2 className="text-2xl max-lg:text-2xl max-md:text-xl mb-1 text-neutral-900 dark:text-white font-medium">
            Hi 👋, my name is
            <span className="text-2xl max-lg:text-4xl text-rose-700 dark:text-rose-600 ml-2 font-bold">
              {hero.name}
            </span>
          </h2>
          {hero?.role && (
            <p className="text-sm md:text-base font-mono text-rose-600 dark:text-rose-400 mb-4 font-semibold">
              {hero.role}
            </p>
          )}
          <p className="text-lg md:text-xl font-light text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
            {hero.description}
          </p>
          {hero?.cv_url && (
            <Link
              className="px-5 py-3 border rounded-2xl border-rose-700 hover:bg-rose-700 text-neutral-800 dark:text-neutral-200 hover:text-white dark:hover:text-white transition-all font-medium inline-block shadow-xs"
              href={hero.cv_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              📃 View my CV
            </Link>
          )}
        </div>
        <div className="my-auto w-[200px] max-sm:w-[250px] max-lg:w-[300px] drop-shadow-xl shrink-0">
          <Image
            src="/avatar.jpg"
            width={200}
            height={200}
            alt={hero.name}
            priority
            className="rounded-full border-rose-700 dark:border-rose-600 border-2 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
