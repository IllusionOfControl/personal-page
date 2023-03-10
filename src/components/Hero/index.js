import Image from 'next/image'
import { FaAngleDoubleDown } from 'react-icons/fa'
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center mx-auto bg-neutral-800" id="hero-section">
      <div className="max-w-[1240px] flex justify-between flex-wrap-reverse lg:flex-nowrap px-4 mx-auto sm:px-10 gap-4">
        <div className="m-auto">
          <h2 className="text-3xl mb-2">Hi, my name is </h2>
          <h1 className="font-bold text-4xl lg:text-5xl mb-2 text-rose-700">Sergey Skorokhod</h1>
          <p className="text-2xl font-light text-neutral-300 mb-6">
            I&apos;m a self-taught software developer with a passion for building efficient
            applications with different technologies.
          </p>
          <Link
            className="px-4 py-3 border rounded-2xl border-rose-700 hover:bg-rose-700 hover:text-neutral-300 active:bg-steel-700 transition-colors"
            href="https://drive.google.com/file/d/17oqcjAg94V_Kgj7geIr3CN2pF_QDLGsr/view?usp=share_link">
            📃 View my CV
          </Link>
        </div>
        <div className="mx-auto w-[300px] xl:w-[500px] drop-shadow-2xl">
          <Image src="/avatar.jpg" width={400} height={400} alt="me" className="rounded-full border-red-700 border-4"/>
        </div>
      </div>
      <div className="text-5xl text-rose-500 absolute bottom-4 w-full flex justify-center animate-bounce">
        <FaAngleDoubleDown/>
      </div>
    </section>
  );
}

export default Hero;