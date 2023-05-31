import Image from "next/image";
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link";
import { cvPdfUrl } from "../../data";

const Hero = () => {
  return (
    <section
      className="w-full h-screen flex flex-col justify-center mx-auto bg-neutral-800"
      id="hero-section"
    >
      <div className="max-w-[1240px] flex justify-between portrait:flex-wrap-reverse flex-nowrap px-4 mx-auto sm:px-10 gap-8">
        <div className="m-auto">
          <h2 className="text-3xl max-lg:text-2xl max-md:text-2xl mb-2">Hi, my name is </h2>
          <h1 className="font-bold max-lg:text-4xl text-5xl mb-2 text-rose-700">
            Sergey Skorokhod
          </h1>
          <p className="text-2xl max-lg:text-xl font-light text-neutral-300 mb-6">
            I&apos;m a self-taught software developer with a passion for
            building efficient applications with different technologies.
          </p>
          <Link
            className="px-4 py-3 border rounded-2xl border-rose-700 hover:bg-rose-700 hover:text-neutral-300 active:bg-steel-700 transition-colors"
            href={cvPdfUrl}
          >
            📃 View my CV
          </Link>
        </div>
        <div className="m-auto w-[400px] max-sm:w-[250px] max-lg:w-[300px] drop-shadow-2xl">
          <Image
            src="/avatar.jpg"
            width={400}
            height={400}
            alt="me"
            className="rounded-full border-red-700 border-4"
          />
        </div>
      </div>
      <div className="text-5xl text-rose-500 absolute bottom-4 w-full flex justify-center animate-bounce">
        <FaAngleDoubleDown />
      </div>
    </section>
  );
};

export default Hero;
