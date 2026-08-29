import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { FaGithub, FaLink } from "react-icons/fa";
import { Navbar, Footer } from "@/components";
import { loadData } from "@/utils/data-loader";
import { getDictionary } from "@/locales";
import { ProjectItem } from "@/types";

interface ProjectsPageProps {
  projects: ProjectItem[];
  locale: string;
}

export default function ProjectsPage({
  projects = [],
  locale,
}: ProjectsPageProps) {
  const dict = getDictionary(locale);
  const isRu = locale === "ru";
  const title = isRu
    ? "Проекты | Сергей Скороход"
    : "Projects | Sergey Skorokhod";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={dict.projects.subtitle} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-neutral-900 dark:text-white tracking-tight">
              {dict.projects.titlePrefix}
              <span className="text-rose-700 dark:text-rose-600">
                {dict.projects.titleSuffix}
              </span>
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
              {dict.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800/80 bg-white dark:bg-neutral-950/60 p-6 flex flex-col justify-between hover:border-rose-600/80 dark:hover:border-rose-700/80 transition-all duration-300 shadow-xs dark:shadow-lg dark:shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xl text-neutral-500 dark:text-neutral-400">
                      {project.links?.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                          title={dict.projects.githubAria}
                        >
                          <FaGithub />
                        </Link>
                      )}
                      {project.links?.demo && (
                        <Link
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                          title={dict.projects.demoAria}
                        >
                          <FaLink />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-100 dark:border-neutral-900">
                  {project.stack?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-rose-700 dark:text-rose-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-8 border-t border-neutral-200 dark:border-neutral-900">
            <h3 className="text-2xl font-mono text-neutral-800 dark:text-neutral-300 mb-4">
              {dict.projects.andMore}
            </h3>
            <Link
              href="https://github.com/IllusionOfControl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-full border border-rose-700 hover:bg-rose-700 text-neutral-800 dark:text-neutral-200 hover:text-white dark:hover:text-white transition-all font-medium text-sm shadow-xs"
            >
              {dict.projects.visitGithub}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async ({
  locale = "en",
}) => {
  const data = loadData(locale);

  return {
    props: {
      projects: data.projects || [],
      locale,
    },
  };
};
