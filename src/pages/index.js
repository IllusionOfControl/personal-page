import Head from 'next/head'
import { Hero, About, Skills, Projects, Contacts, Footer } from "../components";

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
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </main>
      <Footer/>
    </>
  )
}
