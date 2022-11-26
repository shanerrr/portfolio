import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center">
        <Hero />
      </div>
    </main>
  );
}
