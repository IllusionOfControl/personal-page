import Head from "next/head";
import { Hero, About, Skills, Projects, Contacts, Footer } from "../components";
import Navbar from "../components/Navbar";
import { loadData } from "../utils/data-loader";

export default function Home({ hero, skills, contacts, socials, location }) {
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
        <Contacts contacts={contacts} socials={socials} location={location} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = loadData();

  return {
    props: {
      hero: data.hero || null,
      about: data.about || null,
      skills: data.skills || [],
      projects: data.projects || [],
      contacts: data.contacts || {},
      location: data.location || {},
      socials: data.socials || {},
    },
  };
}
