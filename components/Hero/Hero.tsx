import Link from 'next/link';

export default function Hero() {
  // text-[#B1CDEC]
  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="container mx-auto">
        <span className="">👋🏽 Hello, my name is</span>
        <h1 className="font-handwriting text-7xl font-extrabold leading-tight text-yellow">
          Shane Goonasekera.
        </h1>
        <h2 className="text-7xl font-bold leading-tight">
          I love to build software.
        </h2>
        <p className="mt-3 text-xl">
          I&apos;m an Edmonton-based software engineer building frontend and
          <br />
          backend applications for the web. Currently, I am a student
          <br />
          in my last year finishing up my computer science degree.
        </p>
        <div className="mt-12">
          <Link
            href="#contact"
            className="rounded border border-yellow bg-transparent px-6 py-4 transition-colors duration-150 hover:bg-yellow/5"
          >
            Contact me!
          </Link>
        </div>
      </div>
    </div>
  );
}
