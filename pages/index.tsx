import { useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';

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
import Loader from '~/components/Loader';

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="relative flex flex-col overflow-hidden">
      <Head>
        <title>Shane Goonasekera</title>
        <meta name="description" content="Stuff about Shane" />
        <link rel="icon" href="/images/logo.webp" />
      </Head>

      {/* <Loader /> */}
      <Navbar navOpen={navOpen} setNavOpen={(navOpen) => setNavOpen(navOpen)} />
      <div
        className={clsx('container transition-all duration-150', {
          'blur-0': !navOpen,
          'blur-lg': navOpen,
        })}
      >
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
