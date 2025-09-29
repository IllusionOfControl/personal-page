import Image from "next/image";
import Link from "next/link";
import { cvPdfUrl } from "../../data";

const Hero = ({hero}) => {
  return (
    <section
      className="container mx-auto py-14"
      id="introduction"
    >
      <div className="flex justify-between portrait:flex-wrap-reverse flex-nowrap">
        <div className="my-auto w-3/5">
          <h2 className="text-2xl max-lg:text-2xl max-md:text-xl mb-2">
            Hi 👋, my name is
            <span className="text-2xl max-lg:text-4xl  mb-2 text-rose-700 ml-2">
              {hero.name}
            </span>
          </h2>
          <p className="text-xl max-lg:text-xl font-light text-neutral-300 mb-8">
            {hero.description}
          </p>
          <Link
            className="px-4 py-3 border rounded-2xl border-rose-700 hover:bg-rose-700 text-neutral-300 hover:text-neutral-300 active:bg-steel-700 transition-colors"
            href={cvPdfUrl}
          >
            📃 View my CV
          </Link>
        </div>
        <div className="my-auto w-[200px] max-sm:w-[250px] max-lg:w-[300px] drop-shadow-2xl">
          <Image
            src="/avatar.jpg"
            width={200}
            height={200}
            alt="me"
            className="rounded-full border-red-700 border-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
