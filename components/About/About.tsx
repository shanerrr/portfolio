import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="flex h-screen flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="mb-10 flex items-center whitespace-nowrap text-3xl font-extrabold before:mr-4 before:text-2xl before:font-semibold before:text-yellow before:content-['1.'] after:ml-5 after:flex after:w-full after:items-center after:border after:border-dashed after:border-yellow/50">
          About Me
        </h2>
        <div className="relative h-80 w-80 rounded-full after:relative after:right-8 after:block after:h-full after:w-full after:rounded-full after:border-2 after:border-yellow">
          <Image
            className="absolute z-10 flex rounded-full object-cover object-top"
            alt="Profile Picture"
            fill={true}
            src="/profile.webp"
          />
        </div>
      </div>
    </div>
  );
}
