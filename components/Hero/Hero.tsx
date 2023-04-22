import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const containerVariants: Variants = {
    inital: {},
    animate: {
      transition: { staggerChildren: 0.15, type: 'tween' },
    },
  };

  const childVariants = {
    inital: {
      opacity: 0,
      y: 50,
    },
    animate: { opacity: 1, y: 0, transition: { duration: 0.50 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="inital"
      animate="animate"
      className="relative flex h-screen flex-col justify-center"
    >
      <motion.span variants={childVariants} className="text-sm sm:text-base">
        👋🏽 Hello, my name is
      </motion.span>
      <motion.h1
        variants={childVariants}
        className="my-2 whitespace-nowrap font-handwriting text-5xl font-extrabold text-yellow sm:my-3 sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Shane Goonasekera
      </motion.h1>
      <motion.h2
        variants={childVariants}
        className="my-1 text-3xl font-bold sm:my-3 sm:text-5xl md:text-6xl lg:text-7xl"
      >
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
      </motion.h2>
      <motion.p
        variants={childVariants}
        className="mt-3 w-full text-lg md:text-xl xl:w-1/2"
      >
        I&apos;m an Edmonton-based software developer building frontend and
        backend applications for the web.
      </motion.p>
      <motion.div variants={childVariants} className="mt-12">
        <a
          href="#contact"
          className="rounded-3xl border-2 border-yellow bg-transparent px-6 py-4 text-base transition-colors duration-150 hover:bg-yellow/5 sm:text-lg md:text-xl"
        >
          Contact Me!
        </a>
      </motion.div>
    </motion.section>
  );
}
