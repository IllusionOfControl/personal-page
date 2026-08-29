import Head from "next/head";
import { Hero, Skills, Contacts, Footer } from "../components";
import Navbar from "../components/Navbar";
import { loadData } from "../utils/data-loader";

export default function Home({ hero, skills, contacts, socials, location }) {
  return (
    <>
      <Head>
        <title>Sergey Skorokhod | Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Sergey Skorokhod - Python Backend & Full Stack Developer"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main>
        <Hero hero={hero} />
        <Skills skills={skills} />
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
      hero: data.hero || {},
      skills: data.skills || [],
      contacts: data.contacts || {},
      location: data.location || {},
      socials: data.socials || {},
    },
  };
}
