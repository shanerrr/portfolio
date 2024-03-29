import { useRef } from 'react';
import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';

import profileImg from '~/public/images/profile.webp';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sectionVariants: Variants = {
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
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="flex h-max min-h-screen flex-col justify-center py-24"
    >
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="inital"
        animate={isInView ? 'animate' : 'inital'}
      >
        <motion.h2
          variants={childVariants}
          className="mb-16 flex items-center whitespace-nowrap text-2xl font-extrabold before:mr-4 before:font-handwriting before:text-2xl before:font-semibold before:text-yellow before:content-['1.'] after:ml-4 after:w-full after:border after:border-yellow/50 sm:text-3xl"
        >
          About Me 🧑
        </motion.h2>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-y-16 lg:gap-x-16">
          <motion.div
            variants={childVariants}
            className="relative col-span-3 mx-auto aspect-square w-1/2 md:col-span-1 md:w-full"
          >
            <Image
              className="rounded-full object-cover object-top"
              alt="Profile Picture"
              fill={true}
              src={profileImg}
              placeholder="blur"
              quality={100}
              sizes="(min-width: 768px) 33vw, 50vw"
            />
          </motion.div>
          <motion.div
            variants={childVariants}
            className="col-span-3 sm:text-lg md:col-span-2 md:text-xl"
          >
            <p className="text-lg md:text-xl">
              Hey, what&apos;s up! My name is Shane, and I&apos;ve been building
              software since I was a kid. I started off making simple games with
              simple game engines to building stuff for the internet. My main
              focus currently is full-stack web development, but I love to learn
              just about anything.
              <br />
              <br />
              Right now, I just finished my computer science undergrad and I
              have had the privilege of working at different startups as an
              intern and gaining that real-world experience. I plan to continue
              to work and help startups start 😊.
              <br />
              <br />
            </p>
            <div className="grid grid-cols-3">
              <h2 className="col-span-3 text-lg md:text-xl">
                Here are a few technologies I&apos;ve been working with
                recently:
              </h2>
              <ul className="col-span-3 mt-5 grid grid-cols-2 text-sm sm:text-base xl:col-span-2 [&>li]:mb-4 [&>li]:before:mr-2 [&>li]:before:text-yellow [&>li]:before:content-['▹']">
                <li>TypeScript/JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>Express.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
