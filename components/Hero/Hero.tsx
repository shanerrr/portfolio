import Link from "next/link";

export default function Hero() {
  // text-[#B1CDEC]
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <span className="">👋🏽 Hello, my name is</span>
        <h1 className="text-7xl font-extrabold leading-tight text-yellow">
          Shane Goonasekera.
        </h1>
        <h2 className="text-7xl font-bold leading-tight">
          I love to build software.
        </h2>
        <p className="mt-3 text-xl">
          I'm an Edmonton-based software engineer building frontend and
          <br />
          backend applications for the web. Currently, I am a student
          <br />
          in my last year finishing up my computer science degree.
        </p>
        <div className="mt-12">
          <Link
            href="#contact"
            className="px-6 py-4 rounded bg-transparent border border-yellow hover:bg-yellow/5 duration-150 transition-colors"
          >
            Contact me!
          </Link>
        </div>
      </div>
    </div>
  );
}