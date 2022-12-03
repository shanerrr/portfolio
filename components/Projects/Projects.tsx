import { useRef } from 'react';
import Image from 'next/image';
import { useInView, motion, Variants } from 'framer-motion';
import projects from '~/data/projects.json';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sectionVariants: Variants = {
    inital: {},
    animate: {
      transition: { staggerChildren: 0.15 },
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
      id="projects"
      className="flex h-full min-h-screen flex-col justify-center py-24"
    >
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="inital"
        animate={isInView ? 'animate' : 'inital'}
      >
        <motion.h2
          variants={childVariants}
          className="mb-16 flex items-center whitespace-nowrap text-2xl font-extrabold before:mr-4 before:font-handwriting before:text-2xl before:font-semibold before:text-yellow before:content-['3.'] after:ml-4 after:w-full after:border after:border-yellow/50 sm:text-3xl"
        >
          Things I&apos;ve Built 💻
        </motion.h2>
        <div className="grid grid-cols-6 gap-y-16">
          {projects.data
            .filter((project) => project.isSpotlight)
            .map((project) => (
              <motion.div
                variants={childVariants}
                key={project.name}
                className="col-span-6 2xl:col-span-4 2xl:col-start-2"
              >
                <div className="flex justify-between">
                  <Image
                    className="rounded-full object-contain"
                    src="Image"
                    width={75}
                    height={75}
                    quality={100}
                    alt={project.name}
                    loader={() => project.logo}
                  />
                  <h3 className="text-md inline self-start rounded-3xl bg-yellow/10 py-2 px-4 leading-loose text-yellow">
                    Spotlight Project
                  </h3>
                </div>
                <h1 className="mt-3 text-3xl font-bold">{project.name}</h1>
                <h4 className="text-xs text-yellow opacity-40">
                  {project.time}
                </h4>
                <p className="mt-2 text-lg">{project.description}</p>
                <div className="grid grid-cols-4 items-center justify-between py-4">
                  <div className="col-span-3 flex gap-3 overflow-x-auto text-sm opacity-60">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="col-span-1 flex justify-end gap-4 text-2xl">
                    {project.repo && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa-brands fa-github transition-colors duration-150 hover:text-yellow"
                        href={project.repo as string}
                      />
                    )}
                    {project.external && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa-regular fa-arrow-up-right-from-square transition-colors duration-150 hover:text-yellow"
                        href={project.external as string}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
