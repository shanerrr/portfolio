import Head from 'next/head';

//components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '~/components/Experience';
import Projects from '~/components/Projects';
import Contact from '~/components/Contact';

import SideEmail from '~/components/SideEmail';
import SideLinks from '../components/SideLinks';
import Footer from '~/components/Footer';

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Head>
        <title>Shane Goonasekera</title>
        <meta name="description" content="Stuff about Shane" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <div className="container mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <SideEmail />
      <SideLinks />
    </main>
  );
}
