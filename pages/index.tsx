import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

import SideLinks from "../components/SideLinks";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Navbar />
      <div className="">
        <Hero />
        <About />
      </div>
      <SideLinks />
    </main>
  );
}
