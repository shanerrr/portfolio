import { useRef } from 'react';
import Image from 'next/image';
import { useInView, motion, Variants } from 'framer-motion';

//data
import projects from '~/data/projects.json';

export default function OtherProjects() {
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
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="inital"
      animate={isInView ? 'animate' : 'inital'}
      className="pt-24"
    >
      <motion.h2
        variants={childVariants}
        className="text-center text-2xl font-bold sm:text-3xl"
      >
        Other Cool Projects
      </motion.h2>
      <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.data
          .filter((project) => !project.isSpotlight)
          .map((project) => (
            <motion.div
              className="rounded-xl bg-yellow/5 p-4"
              variants={childVariants}
              key={project.name}
            >
              <div className="flex items-center justify-between py-2">
                <Image
                  className="object-contain"
                  src="Image"
                  width={35}
                  height={35}
                  quality={100}
                  alt={project.name}
                  loader={() => project.logo}
                />
                <div className="col-span-1 flex justify-end gap-4 text-xl">
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
              <h1 className="mt-3 text-2xl font-bold">{project.name}</h1>
              <h4 className="text-xs text-yellow opacity-40">{project.time}</h4>
              <p className="mt-2 text-base">{project.description}</p>
              <div className="grid grid-cols-4 items-center justify-between py-4">
                <div className="col-span-4 flex gap-3 overflow-x-auto text-xs opacity-60">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
}
