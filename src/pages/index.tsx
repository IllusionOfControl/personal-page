import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Hero, Skills, Contacts, Footer, Navbar } from "@/components";
import { loadData } from "@/utils/data-loader";
import {
  HeroData,
  SkillCategory,
  ContactsData,
  LocationData,
  SocialsData,
} from "@/types";

interface HomePageProps {
  hero: HeroData;
  skills: SkillCategory[];
  contacts: ContactsData;
  socials: SocialsData;
  location: LocationData;
  locale: string;
}

export default function Home({
  hero,
  skills,
  contacts,
  socials,
  location,
  locale,
}: HomePageProps) {
  const isRu = locale === "ru";
  const title = isRu
    ? "Сергей Скороход | Портфолио"
    : "Sergey Skorokhod | Portfolio";
  const description = isRu
    ? "Персональное портфолио Сергея Скорохода - Python Backend & Full Stack разработчик"
    : "Personal portfolio of Sergey Skorokhod - Python Backend & Full Stack Developer";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
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

export const getStaticProps: GetStaticProps<HomePageProps> = async ({
  locale = "en",
}) => {
  const data = loadData(locale);

  return {
    props: {
      hero: data.hero || ({} as HeroData),
      skills: data.skills || [],
      contacts: data.contacts || ({} as ContactsData),
      location: data.location || ({} as LocationData),
      socials: data.socials || ({} as SocialsData),
      locale,
    },
  };
};
