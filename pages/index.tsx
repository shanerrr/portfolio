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
// import Loader from '~/components/Loader';

export default function Home() {
  return (
    <main className="relative flex flex-col overflow-hidden">
      <Head>
        <title>Shane Goonasekera</title>
        <meta name="description" content="Stuff about Shane" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* <Loader /> */}
      <Navbar />
      <div className="container">
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
