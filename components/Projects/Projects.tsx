import { useRef } from 'react';
import { useInView, motion, Variants } from 'framer-motion';
import Image from 'next/image';

//components
import OtherProjects from './OtherProjects/OtherProjects';

//data
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
        <ul className="flex flex-col gap-y-32">
          {projects.data
            .filter((project) => project.isSpotlight)
            .map((project) => (
              <motion.li
                variants={childVariants}
                key={project.name}
                className="group"
              >
                <div className="grid h-96 grid-cols-12 grid-rows-1">
                  <div className="relative z-30 row-span-full group-odd:col-start-1 group-odd:col-end-7 group-even:col-start-7 group-even:col-span-full group-even:text-right">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex group-even:justify-end">
                        <span className="text-md inline self-start rounded-3xl bg-yellow/10 px-4 py-2 leading-loose text-yellow">
                          Spotlight Project
                        </span>
                      </div>
                      <div>
                        <div className="flex py-3 group-odd:flex-row-reverse group-odd:justify-end group-even:justify-end">
                          <div>
                            <h1 className="text-3xl font-bold">
                              {project.name}
                            </h1>
                            <h4 className="text-xs text-yellow opacity-40">
                              {project.time}
                            </h4>
                          </div>
                          <div className="relative w-14 overflow-hidden rounded-full group-odd:mr-4 group-even:ml-4">
                            <Image
                              className=" object-cover"
                              src="Image"
                              quality={100}
                              fill={true}
                              alt={project.name}
                              loader={() => project.logo}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="my-4 rounded-2xl bg-brightgreen p-4 text-lg transition-shadow duration-150 hover:shadow-lg">
                        {project.description}
                      </p>
                      <div>
                        <div className="flex gap-3 overflow-x-auto text-sm opacity-60 group-even:justify-end ">
                          {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        <div className="mt-3 flex gap-4 text-xl group-even:justify-end">
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
                    </div>
                  </div>
                  <div className="relative row-span-full h-full overflow-hidden rounded-2xl group-odd:col-start-6 group-odd:col-span-full group-even:col-start-1 group-even:col-end-8">
                    <div className="mix-blend-multiply grayscale-0 absolute z-20 rounded-2xl h-full w-full bg-yellow/70 opacity-100 transition-opacity duration-150 hover:opacity-0" />
                    <Image
                      className="object-cover"
                      alt={project.name}
                      src={project.banner!}
                      fill={true}
                    />
                  </div>
                </div>
              </motion.li>
            ))}
        </ul>
        <OtherProjects />
      </motion.div>
    </section>
  );
}
