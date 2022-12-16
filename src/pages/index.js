import Head from 'next/head'
import Image from 'next/image'
import { Header } from "../components";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sergey Skorokhod Portfolio</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero/>
        <About></About>
        <Skills/>
        <Projects/>
        <Contacts/>
      </main>
      <Footer/>
    </>
  )
}
