import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col justify-center">
      <span className="text-sm sm:text-base">👋🏽 Hello, my name is</span>
      <h1 className="my-1 font-handwriting text-3xl font-extrabold text-yellow sm:my-3 sm:text-6xl md:text-7xl lg:text-8xl">
        Shane Goonasekera.
      </h1>
      <h2 className="my-1 text-xl font-bold sm:my-3 sm:text-5xl md:text-6xl lg:text-7xl">
        I{' '}
        <motion.span
          className="inline-block"
          animate={{ scale: 1.2 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          ❤️
        </motion.span>{' '}
        to build software.
      </h2>
      <p className="mt-3 text-sm sm:text-lg md:text-xl w-full xl:w-1/2">
        I&apos;m an Edmonton-based software engineer building frontend and
        backend applications for the web. Currently, I am a student in my last
        year finishing up my computer science degree.
      </p>
      <div className="mt-12">
        <a
          href="#contact"
          className="rounded-3xl border-2 border-yellow bg-transparent px-6 py-4 transition-colors duration-150 hover:bg-yellow/5 sm:text-lg md:text-xl"
        >
          Contact Me!
        </a>
      </div>
      {/* 
      <motion.div
        // initial={{ y: '-100vh' }}
        animate={{ x: -100, y: 5 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 20 }}
        className="absolute top-80 right-64 h-16 w-16 rounded-full bg-yellow mix-blend-screen"
      />
      <motion.div
        animate={{ x: 15, y: -200 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 20 }}
        className="absolute right-0 h-16 w-16 rounded-full bg-yellow mix-blend-screen"
      />
      <motion.div
        animate={{ x: -100, y: 83 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 20 }}
        className="absolute top-36 right-8 h-48 w-48 rounded-full bg-yellow mix-blend-screen"
      />
      <motion.div
        animate={{ x: 200, y: 100 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 20 }}
        className="absolute right-1/2 top-1/2 h-40 w-40 rounded-full bg-yellow mix-blend-screen"
      />
      <motion.div
        animate={{ x: 83, y: -50 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 20 }}
        className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow mix-blend-screen"
      /> */}
    </section>
  );
}
