import Link from "next/link";
import { FaGitAlt, FaGithub, FaLink } from "react-icons/fa";
import { projects } from "../../data";

const Projects = () => {
  return (
    <section className="bg-neutral-900 py-16 sm:py-28" id="projects-section">
      <div className="max-w-[1240px] px-4 mx-auto md:px-10">
        <h1 className="text-5xl">
          Featured <span className="text-rose-800">projects</span>
        </h1>
        <div className="pt-12 md:grid portrait:grid-cols-1 grid-cols-[2fr_4fr] pb-8">
          <div className="portrait:hidden max-h-[500px] text-[128px] text-rose-700 flex justify-center items-center">
            <FaGitAlt />
          </div>
          <ul className="w-auto portrait:mx-8 grid md:grid-cols-2 gap-4 md:gap-8">
            {projects.map((project, i) => {
              return (
                <li
                  key={i}
                  className="rounded-md border shadow-md border-neutral-700 hover:border-rose-700 duration-500 transition-colors"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div className="flex flex-col flex-grow h-fit p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-primary">
                          {project.title}
                        </p>
                        <div className="flex space-x-4 text-3xl">
                          {project.links.github && (
                            <Link
                              href={project.links.github}
                              className="hover:text-rose-700 transition-colors"
                            >
                              <FaGithub />
                            </Link>
                          )}
                          {project.links.demo && (
                            <Link
                              href={project.links.demo}
                              className="hover:text-rose-700 transition-colors"
                            >
                              <FaLink />
                            </Link>
                          )}
                        </div>
                      </div>
                      <p className="text-sm md:text-base grow">
                        {project.description}
                      </p>
                      <div className="w-full flex flex-wrap align-bottom">
                        {project.stack.map((technology, i) => (
                          <div
                            key={i}
                            className="text-[0.9rem] px-3 mx-1 my-1 rounded-xl bg-neutral-700"
                          >
                            {technology}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-center sm:col-span-2">
          <h3 className="text-3xl xl:text-3xl pb-6 font-mono">
            And many more...
          </h3>
          <Link
            className="px-4 py-3 border rounded-2xl border-rose-700 hover:bg-rose-700 hover:text-neutral-300 active:bg-steel-700 transition-colors"
            href="https://github.com/IllusionOfControl"
          >
            🚀 visit my GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
