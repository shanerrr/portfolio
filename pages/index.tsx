import Head from 'next/head';

//components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '~/components/Experience';
import Projects from '~/components/Projects';
import SideEmail from '~/components/SideEmail';
import SideLinks from '../components/SideLinks';

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Head>
        <title>Shane Goonasekera</title>
      </Head>

      <Navbar />
      <div className="">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
      <SideEmail />
      <SideLinks />
    </main>
  );
}
