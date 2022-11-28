export default function Hero() {
  // text-[#B1CDEC]
  return (
    <div className="flex h-screen flex-col justify-center">
      <span className="">👋🏽 Hello, my name is</span>
      <h1 className="font-handwriting text-8xl font-extrabold leading-tight text-yellow">
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
        <a
          href="#contact"
          className="rounded-3xl border-2 border-yellow bg-transparent px-6 py-4 text-xl transition-colors duration-150 hover:bg-yellow/5"
        >
          Say Hello!
        </a>
      </div>
    </div>
  );
}
