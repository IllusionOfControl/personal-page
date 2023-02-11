import Image from 'next/image'
import { FaAngleDoubleDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center mx-auto bg-neutral-800">
      <div className="top-1/2 w-full max-w-[1240px] flex justify-between flex-wrap-reverse lg:flex-nowrap grid-cols-1 sm:grid-cols-2 px-4 mx-auto sm:px-10 gap-4">
        <div className="m-auto">
          <h2 className="text-3xl mb-2">Hi, my name is </h2>
          <h1 className="font-bold text-4xl lg:text-5xl mb-2 text-rose-700">Sergey Skorokhod</h1>
          <p className="text-2xl">
            I&apos;m a self-taught software developer with a passion for building efficient
            applications with different technologies.
          </p>
          <div className="flex">
          </div>
        </div>
        <div className="mx-auto w-[300px] xl:w-[500px] drop-shadow-2xl">
          <Image src="/avatar.jpg" width={400} height={400} alt="me" className="rounded-full border-red-700 border-4"/>
        </div>
      </div>
      <div className="text-5xl text-rose-500 absolute left-1/2 bottom-8 animate-bounce">
        <FaAngleDoubleDown/>
      </div>
    </section>
  );
}

export default Hero;