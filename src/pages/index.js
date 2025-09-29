import Head from "next/head";
import { Hero, About, Skills, Projects, Contacts, Footer } from "../components";
import Navbar from "../components/Navbar";
import { loadData } from "../utils/data-loader";
import { skills } from "../data";

export default function Home({hero, about, skills}) {
  return (
    <>
      <Head>
        <title>Sergey Skorokhod Portfolio</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero hero={hero} />
        {/*<About about={about} />*/}
        <Skills skills={skills} />
        {/*<Projects />*/}
        {/*<Contacts />*/}
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = loadData();

  return {
    props: {
      hero: data.hero ?? null,
      about: data.about ?? null,
      skills: data.skills ?? null,
      // projects: data.projects,
      // socials: data.socials,
      // location: data.location,
      // cvPdfUrl: data.cvPdfUrl,
    },
  };
}