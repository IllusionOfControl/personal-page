import Head from "next/head";
import Navbar from "../components/Navbar";
import { Footer } from "../components";
import { loadData } from "../utils/data-loader";

export default function UsesPage({ uses }) {
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              {uses.title || "Uses"}
            </h1>
            <p className="text-lg text-neutral-300 mb-2">{uses.description}</p>
          </header>

          {/* Content sections */}
          <div className="space-y-12">
            {uses.sections?.map((section, sIdx) => (
              <section key={sIdx} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-neutral-800 pb-2">
                  {section.title}
                </h2>

                <div className="space-y-8 pl-1">
                  {section.subsections?.map((sub, subIdx) => (
                    <div key={subIdx} className="space-y-3">
                      {sub.title && (
                        <h3 className="text-lg md:text-xl font-semibold text-rose-400">
                          {sub.title}
                        </h3>
                      )}
                      <ul className="space-y-2 list-disc list-inside text-neutral-300 text-sm md:text-base leading-relaxed marker:text-rose-500">
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

export async function getStaticProps() {
  const data = loadData();

  return {
    props: {
      uses: data.uses || null,
    },
  };
}
