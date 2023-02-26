import Link from "next/link";
import {FaGithub, FaLink} from 'react-icons/fa'
import {projects} from '../../data'


const Hero = () => {
  return (
    <section className="bg-neutral-900" id="projects-section">
      <div
        className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-[2fr_4fr] px-4 mx-auto md:px-10 py-16 sm:py-28 gap-4">
        <h1 className="text-5xl w-full">Featured <span className="text-rose-800">projects</span></h1>
        <ul className="pt-20 grid md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, i) => {
            return (
              <li key={i}
                  className="rounded-md border shadow-md border-neutral-700 hover:border-rose-900 transition-colors">
                <div
                  className="h-full flex flex-col justify-between">
                  <div className="flex flex-col flex-grow h-fit p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary">{project.title}</p>
                      <div className="flex space-x-4 text-3xl">
                        {project.links.github && (<Link href={project.links.github}
                                                        className="hover:text-rose-700 transition-colors"><FaGithub/></Link>)}
                        {project.links.demo && (<Link href={project.links.demo}
                                                      className="hover:text-rose-700 transition-colors"><FaLink/></Link>)}
                      </div>
                    </div>
                    <p className="text-sm md:text-base grow">{project.description}</p>
                    <div className="w-full flex flex-wrap align-bottom">
                      {project.stack.map((technology, i) =>
                        <div key={i} className="px-3 mx-1 my-1 rounded-xl bg-neutral-700">{technology}</div>)
                      }
                    </div>
                  </div>
                </div>
              </li>
            )
          })}

          <li className="mt-10 xl:mt-0 text-center sm:col-span-2">
            <h3 className="text-3xl xl:text-3xl pb-6 font-mono">And many more...</h3>
            <Link
              className="px-4 py-3 border border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-neutral-300 active:bg-steel-700 transition-colors"
              href="https://github.com/IllusionOfControl">
              visit my GitHub 🚀
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;