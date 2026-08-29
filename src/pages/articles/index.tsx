import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import { Navbar, Footer } from "@/components";
import { getAllArticles } from "@/utils/articles";
import { getDictionary } from "@/locales";
import { ArticleMeta } from "@/types";

interface ArticlesPageProps {
  articles: ArticleMeta[];
  locale: string;
}

export default function ArticlesPage({
  articles = [],
  locale,
}: ArticlesPageProps) {
  const dict = getDictionary(locale);
  const isRu = locale === "ru";
  const title = isRu
    ? "Статьи и заметки | Сергей Скороход"
    : "Articles & Notes | Sergey Skorokhod";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={dict.articles.subtitle} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <section className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-3">
              {dict.articles.titlePrefix}
              <span className="text-rose-700 dark:text-rose-600">
                {dict.articles.titleSuffix}
              </span>
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
              {dict.articles.subtitle}
            </p>
          </div>

          {/* Articles list */}
          {articles.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-2xl">
              <p className="text-neutral-500 dark:text-neutral-400">
                {dict.articles.empty}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-950/50 p-6 md:p-8 hover:border-rose-600/80 dark:hover:border-rose-700/80 transition-all duration-300 shadow-xs dark:shadow-xl dark:shadow-black/20 group"
                >
                  <Link href={`/articles/${article.slug}`} className="block">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 font-mono mb-3">
                      <span className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400 font-medium">
                        <FaCalendarAlt /> {article.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5">
                        <FaClock /> {article.readingTime}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors mb-3 leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-5">
                      {article.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-900">
                      <div className="flex flex-wrap gap-2">
                        {article.tags?.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-rose-700 dark:text-rose-300 font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-500 group-hover:translate-x-1 transition-transform">
                        {dict.articles.readArticle} <FaArrowRight />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async ({
  locale = "en",
}) => {
  const articles = getAllArticles(locale);

  return {
    props: {
      articles,
      locale,
    },
  };
};
