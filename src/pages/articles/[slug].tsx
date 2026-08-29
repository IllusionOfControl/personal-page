import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaTag,
  FaGlobe,
} from "react-icons/fa";
import { Navbar, Footer } from "@/components";
import { getAllArticleSlugs, getArticleBySlug } from "@/utils/articles";
import { getDictionary } from "@/locales";
import { ArticleData } from "@/types";

interface ArticlePageProps {
  article: ArticleData | null;
  locale: string;
}

export default function ArticlePage({ article, locale }: ArticlePageProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const dict = getDictionary(locale);
  const otherLocale = locale === "ru" ? "en" : "ru";

  useEffect(() => {
    if (!contentRef.current) return;

    const preBlocks = contentRef.current.querySelectorAll("pre");
    preBlocks.forEach((pre) => {
      if (pre.parentElement?.classList.contains("code-block-wrapper")) return;

      const wrapper = document.createElement("div");
      wrapper.className =
        "relative group my-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 dark:bg-neutral-950/90 overflow-hidden shadow-md dark:shadow-lg dark:shadow-black/30 code-block-wrapper";

      const codeEl = pre.querySelector("code");
      let lang = "";
      if (codeEl) {
        const langClass = Array.from(codeEl.classList).find((c) =>
          c.startsWith("language-"),
        );
        if (langClass) {
          lang = langClass.replace("language-", "").toUpperCase();
        }
      }

      const header = document.createElement("div");
      header.className =
        "flex items-center justify-between px-4 py-2 bg-neutral-800/90 dark:bg-neutral-900/80 border-b border-neutral-700/80 dark:border-neutral-800/80 text-xs font-mono text-neutral-300 dark:text-neutral-400 select-none";

      const langSpan = document.createElement("span");
      langSpan.className = "font-semibold text-rose-400";
      langSpan.textContent = lang || "CODE";
      header.appendChild(langSpan);

      const copyBtn = document.createElement("button");
      copyBtn.className =
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-700 hover:bg-neutral-600 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-200 hover:text-white transition-all cursor-pointer";
      copyBtn.innerHTML = `
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384h192c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"></path></svg>
        <span>Copy</span>
      `;

      copyBtn.addEventListener("click", async () => {
        const codeText = codeEl ? codeEl.innerText : pre.innerText;
        try {
          await navigator.clipboard.writeText(codeText);
          copyBtn.innerHTML = `
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg" class="text-emerald-400"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
            <span class="text-emerald-400 font-semibold">Copied!</span>
          `;

          setTimeout(() => {
            copyBtn.innerHTML = `
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384h192c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"></path></svg>
              <span>Copy</span>
            `;
          }, 2000);
        } catch (err) {
          console.error("Failed to copy code: ", err);
        }
      });

      header.appendChild(copyBtn);

      if (pre.parentNode) {
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);
      }

      pre.className =
        "p-4 overflow-x-auto text-sm font-mono text-rose-200/90 leading-relaxed m-0 bg-transparent border-0";
    });
  }, [article?.content]);

  if (!article) return null;

  return (
    <>
      <Head>
        <title>{`${article.title} | Sergey Skorokhod`}</title>
        <meta name="description" content={article.description} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-medium"
            >
              <FaArrowLeft /> {dict.articles.backToAll}
            </Link>

            {/* Language toggle badge for this article */}
            <Link
              href={`/articles/${article.slug}`}
              locale={otherLocale}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              <FaGlobe size={11} className="text-rose-600 dark:text-rose-400" />
              <span>
                {dict.articles.alsoAvailableIn}{" "}
                <strong>{dict.articles.otherLangName}</strong>
              </span>
            </Link>
          </div>

          <header className="mb-10 pb-8 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-4">
              <span className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400 font-medium">
                <FaCalendarAlt /> {article.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <FaClock /> {article.readingTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4 leading-tight">
              {article.title}
            </h1>

            {article.description && (
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                {article.description}
              </p>
            )}

            {article.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-rose-700 dark:text-rose-300 font-medium"
                  >
                    <FaTag
                      size={10}
                      className="text-rose-600 dark:text-rose-500"
                    />{" "}
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            ref={contentRef}
            className="prose prose-invert max-w-none 
              text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed space-y-6
              [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-neutral-900 dark:[&>h2]:text-white [&>h2]:pt-6 [&>h2]:border-t [&>h2]:border-neutral-200 dark:[&>h2]:border-neutral-800/80
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-rose-700 dark:[&>h3]:text-rose-400 [&>h3]:pt-4
              [&>p]:leading-relaxed
              [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-2 [&>ul]:marker:text-rose-600 dark:[&>ul]:marker:text-rose-500
              [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:space-y-2 [&>ol]:marker:text-rose-600 dark:[&>ol]:marker:text-rose-500
              [&>code]:bg-neutral-200 dark:[&>code]:bg-neutral-900 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-rose-700 dark:[&>code]:text-rose-300 [&>code]:font-mono [&>code]:text-sm
              [&>blockquote]:border-l-4 [&>blockquote]:border-rose-600 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-neutral-600 dark:[&>blockquote]:text-neutral-400
              [&>hr]:border-neutral-200 dark:[&>hr]:border-neutral-800 [&>hr]:my-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm text-rose-700 dark:text-rose-400 hover:text-rose-600 dark:hover:text-rose-300 transition-colors font-medium"
            >
              <FaArrowLeft /> {dict.articles.backToAll}
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticleSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({
  params,
  locale = "en",
}) => {
  const slug = params?.slug as string;
  const article = await getArticleBySlug(slug, locale);

  return {
    props: {
      article,
      locale,
    },
  };
};
