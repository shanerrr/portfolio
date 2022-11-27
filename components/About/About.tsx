import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="flex h-screen flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="mb-16 flex items-center whitespace-nowrap text-3xl font-extrabold before:mr-4 before:font-handwriting before:text-2xl before:font-semibold before:text-yellow before:content-['1.'] after:ml-5 after:flex after:w-full after:items-center after:border after:border-yellow/50">
          About Me
        </h2>
        <div className="grid grid-cols-3">
          <div className="relative h-96 w-96 rounded-full">
            <Image
              className="absolute z-10 flex rounded-full object-cover object-top"
              alt="Profile Picture"
              fill={true}
              src="/images/profile.webp"
              quality={100}
            />
          </div>
          <div className="col-span-2">
            <p className="text-xl">
              Hey, what's up! My name is Shane, and I've been building software
              since I was a kid. I started off making simple games with simple
              game engines to building stuff for the internet. My main focus
              currently is full-stack web development, but I love to learn just
              about anything.
              <br />
              <br />
              Right now, I am finishing up my last year (till April 2023) of my
              undergraduate degree, but I have had the privilege of working at
              different startups as an intern and gaining that real-world
              experience. I plan to continue to work and help startups start 😊.
              <br />
              <br />
            </p>
            <div className="grid grid-cols-3">
              <h2 className="col-span-3 text-xl">
                Here are a few technologies I've been working with recently:
              </h2>
              <ul className="text-md col-span-2 mt-5 grid grid-cols-2 [&>li]:mb-4 [&>li]:before:mr-2 [&>li]:before:text-yellow [&>li]:before:content-['▹']">
                <li>TypeScript/JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>Express.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
