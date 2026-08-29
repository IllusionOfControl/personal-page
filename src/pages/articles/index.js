import Head from "next/head";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components";
import { getAllArticles } from "../../utils/articles";

export default function ArticlesPage({ articles = [] }) {
  return (
    <>
      <Head>
        <title>Articles | Sergey Skorokhod</title>
        <meta
          name="description"
          content="Articles, tutorials, and engineering notes on backend development, home labs, Docker, and distributed systems."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <section className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              Articles & <span className="text-rose-700">Notes</span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg">
              Thoughts on backend architecture, self-hosted infrastructure, AI
              workflows, and software craftsmanship.
            </p>
          </div>

          {/* Articles list */}
          {articles.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-neutral-800 rounded-2xl">
              <p className="text-neutral-400">
                No articles published yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-2xl border border-neutral-800/80 bg-neutral-950/50 p-6 md:p-8 hover:border-rose-700/80 transition-all duration-300 shadow-xl shadow-black/20 group"
                >
                  <Link href={`/articles/${article.slug}`} className="block">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 font-mono mb-3">
                      <span className="flex items-center gap-1.5 text-rose-400">
                        <FaCalendarAlt /> {article.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5 text-neutral-400">
                        <FaClock /> {article.readingTime}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-neutral-100 group-hover:text-rose-400 transition-colors mb-3 leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-5">
                      {article.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-900">
                      <div className="flex flex-wrap gap-2">
                        {article.tags?.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-rose-300/80 font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 group-hover:translate-x-1 transition-transform">
                        Read article <FaArrowRight />
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

export async function getStaticProps() {
  const articles = getAllArticles();

  return {
    props: {
      articles,
    },
  };
}
