import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Footer } from "../components";
import { loadData } from "../utils/data-loader";

export default function ProjectsPage({ projects = [] }) {
  return (
    <>
      <Head>
        <title>Projects | Sergey Skorokhod</title>
        <meta
          name="description"
          content="Featured projects, open source, and web applications by Sergey Skorokhod."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Featured <span className="text-rose-700">Projects</span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg">
              A collection of web services, bots, tools, and experiments I have
              built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-800/80 bg-neutral-950/60 p-6 flex flex-col justify-between hover:border-rose-700/80 transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-neutral-100">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xl text-neutral-400">
                      {project.links?.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-rose-500 transition-colors"
                          title="Source code on GitHub"
                        >
                          <FaGithub />
                        </Link>
                      )}
                      {project.links?.demo && (
                        <Link
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-rose-500 transition-colors"
                          title="Live demo"
                        >
                          <FaLink />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900">
                  {project.stack?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-rose-300/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-8 border-t border-neutral-900">
            <h3 className="text-2xl font-mono text-neutral-300 mb-4">
              And many more on GitHub...
            </h3>
            <Link
              href="https://github.com/IllusionOfControl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-full border border-rose-700 hover:bg-rose-700 text-neutral-200 hover:text-white transition-all font-medium text-sm"
            >
              🚀 Visit my GitHub
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = loadData();

  return {
    props: {
      projects: data.projects || [],
    },
  };
}
