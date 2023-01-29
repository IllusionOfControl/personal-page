import Image from 'next/image'
import Link from "next/link";
import {FaGithub, FaLink} from 'react-icons/fa'
import {projects} from '../../data'


const Hero = () => {
  return (
    <section className="bg-neutral-900">
      <div
        className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-[2fr_4fr] px-4 mx-auto md:px-10 py-16 sm:py-28 gap-4">
        <h1 className="text-5xl w-full opacity-80">Featured <span className="text-rose-800">projects</span></h1>
        <ul className="sm:pt-16">
          {projects.map((project, i) => {
            return (
              <li key={i} className="py-4">
                <div
                  className="h-full rounded-xl flex flex-col justify-between border shadow-md border-neutral-700">
                  <div className="flex flex-col">
                    <div
                      className="relative h-[200px] w-full rounded-t-xl bg-neutral-800 lg:h-[300px]">
                      <Image src={project.img} alt="Portfolio" width={700} height={700}
                             className="absolute h-full w-full z-10 rounded-t-xl object-contain"/>
                    </div>
                    <div className="h-fit p-5 space-y-3">
                      <div className="flex items-center justify-between space-x-3">
                        <p className="text-lg font-bold text-primary">{project.title}</p>
                        <div className="flex space-x-4 text-xl">
                          {project.links.github && (<Link href={project.links.github}><FaGithub/></Link>)}
                          {project.links.demo && (<Link href={project.links.demo}><FaLink/></Link>)}
                        </div>
                      </div>
                      <p className="text-sm md:text-base">{project.description}</p>
                      <div className="w-full flex flex-col items-center space-y-3">
                        <div className="w-full flex flex-wrap">
                          {project.stack.map((technology, i) =>
                            <div key={i} className="px-3 mx-1 my-2 rounded-xl bg-neutral-700">{technology}</div>)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
}

export default Hero;