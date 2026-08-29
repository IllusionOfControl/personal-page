import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Navbar, Footer } from "@/components";
import { loadData } from "@/utils/data-loader";
import { UsesData } from "@/types";

interface UsesPageProps {
  uses: UsesData;
}

export default function UsesPage({ uses }: UsesPageProps) {
  if (!uses) return null;

  return (
    <>
      <Head>
        <title>Uses | Sergey Skorokhod</title>
        <meta
          name="description"
          content="The tools, gadgets, and software I use on a daily basis."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
              {uses.title || "Uses"}
            </h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-2">
              {uses.description}
            </p>
            {uses.note && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                This page is listed on{" "}
                <Link
                  href="https://uses.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  uses.tech
                </Link>{" "}
                and inspired by{" "}
                <Link
                  href="https://wesbos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Wes Bos
                </Link>
                .
              </p>
            )}
          </header>

          {/* Content sections */}
          <div className="space-y-12">
            {uses.sections?.map((section, sIdx) => (
              <section key={sIdx} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight border-b border-neutral-200 dark:border-neutral-800 pb-2">
                  {section.title}
                </h2>

                <div className="space-y-8 pl-1">
                  {section.subsections?.map((sub, subIdx) => (
                    <div key={subIdx} className="space-y-3">
                      {sub.title && (
                        <h3 className="text-lg md:text-xl font-semibold text-rose-700 dark:text-rose-400">
                          {sub.title}
                        </h3>
                      )}
                      <ul className="space-y-2 list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed marker:text-rose-600 dark:marker:text-rose-500">
                        {sub.items?.map((item, itemIdx) => (
                          <li key={itemIdx} className="pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
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

export const getStaticProps: GetStaticProps<UsesPageProps> = async () => {
  const data = loadData();

  return {
    props: {
      uses: data.uses || ({} as UsesData),
    },
  };
};
