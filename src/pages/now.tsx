import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import {
  FaBullseye,
  FaGraduationCap,
  FaGamepad,
  FaGithub,
} from "react-icons/fa";
import { Navbar, Footer } from "@/components";
import { loadData } from "@/utils/data-loader";
import { getDictionary } from "@/locales";
import { NowData } from "@/types";

interface NowPageProps {
  now: NowData;
  locale: string;
}

export default function NowPage({ now, locale }: NowPageProps) {
  if (!now) return null;
  const dict = getDictionary(locale);
  const isRu = locale === "ru";
  const title = isRu
    ? `${now.title || "Сейчас"} | Сергей Скороход`
    : `${now.title || "Now"} | Sergey Skorokhod`;

  const sectionIcons: Record<string, React.ReactElement> = {
    focus: (
      <FaBullseye className="text-rose-600 dark:text-rose-500 mr-3 text-2xl inline" />
    ),
    learning: (
      <FaGraduationCap className="text-rose-600 dark:text-rose-500 mr-3 text-2xl inline" />
    ),
    github: (
      <FaGithub className="text-rose-600 dark:text-rose-500 mr-3 text-2xl inline" />
    ),
    playing: (
      <FaGamepad className="text-rose-600 dark:text-rose-500 mr-3 text-2xl inline" />
    ),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={now.description} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <header className="mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
              {now.title || "Now"}
            </h1>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 mb-2 leading-relaxed">
              {now.description}
            </p>
            <p className="text-xs text-neutral-500 font-mono">
              {now.last_updated}
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-12">
            {now.sections?.map((section, sIdx) => (
              <section
                key={sIdx}
                className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-950/40 p-6 md:p-8 shadow-xs dark:shadow-xl dark:shadow-black/20"
              >
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800/80 pb-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white flex items-center">
                    {sectionIcons[section.type] || null}
                    {section.title}
                  </h2>
                  {section.type === "github" && (
                    <Link
                      href="https://github.com/IllusionOfControl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1.5 font-medium"
                    >
                      <FaGithub /> @IllusionOfControl
                    </Link>
                  )}
                </div>

                {/* Subsections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.subsections?.map((sub, subIdx) => (
                    <div key={subIdx} className="space-y-4">
                      {sub.title && (
                        <h3 className="text-lg font-bold text-rose-700 dark:text-rose-400 border-l-2 border-rose-600 pl-3">
                          {sub.title}
                        </h3>
                      )}

                      {/* Items */}
                      {sub.items && (
                        <div className="space-y-4">
                          {sub.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-4 border border-neutral-200/80 dark:border-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-800 transition-colors shadow-2xs"
                            >
                              <h4 className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-200 mb-1.5">
                                {item.title}
                              </h4>
                              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<NowPageProps> = async ({
  locale = "en",
}) => {
  const data = loadData(locale);

  return {
    props: {
      now: data.now || ({} as NowData),
      locale,
    },
  };
};
