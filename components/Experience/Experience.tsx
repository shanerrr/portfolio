import { useState, useRef } from 'react';
import { useInView, Variants, motion } from 'framer-motion';
import clsx from 'clsx';
import Image from 'next/image';

import jobs from '~/data/experience.json';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //hook to manage job state
  const [jobIndex, setJobIndex] = useState(0);

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
      id="experience"
      className="flex h-screen flex-col justify-center py-24"
    >
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="inital"
        animate={isInView ? 'animate' : 'inital'}
      >
        <motion.h2
          variants={childVariants}
          className="mb-16 flex items-center whitespace-nowrap text-2xl font-extrabold before:mr-4 before:font-handwriting before:text-2xl before:font-semibold before:text-yellow before:content-['2.'] after:ml-4 after:w-full after:border after:border-yellow/50 sm:text-3xl"
        >
          Where I&apos;ve Worked 💼
        </motion.h2>
        <div className="grid grid-cols-4 gap-8">
          <motion.div
            variants={childVariants}
            className="col-span-4 flex flex-row gap-4 lg:col-span-1 lg:flex-col"
          >
            {jobs.data.map((job, idx) => (
              <button
                key={job.name}
                type="button"
                className={clsx(
                  'block w-max rounded-3xl border-2 py-4 px-6 text-2xl transition-all duration-150 hover:text-yellow lg:w-full',
                  {
                    hidden: !job.showExperience,
                    'border-yellow bg-yellow/5 text-yellow': idx === jobIndex,
                    'border-navygreen': idx !== jobIndex,
                  },
                )}
                onClick={() => setJobIndex(idx)}
              >
                {job.name}
              </button>
            ))}
          </motion.div>
          <motion.div
            variants={childVariants}
            className="col-span-4 lg:col-span-3"
          >
            <div className="flex justify-between">
              <h3 className="mt-2 text-2xl font-bold">
                {jobs.data[jobIndex].title}{' '}
                <a
                  className="text-yellow"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={jobs.data[jobIndex].url}
                >
                  @ {jobs.data[jobIndex].name}
                </a>
              </h3>
              <div className="hidden items-center sm:flex">
                <Image
                  className="object-contain"
                  src="Image"
                  width={60}
                  height={60}
                  quality={100}
                  alt={jobs.data[jobIndex].name}
                  loader={() => jobs.data[jobIndex].logo}
                />
              </div>
            </div>
            <p className="text-lg opacity-60">{jobs.data[jobIndex].time}</p>
            <div>
              <ul className="text-md mt-5 [&>li]:mb-4 [&>li]:before:mr-2 [&>li]:before:text-yellow [&>li]:before:content-['▹']">
                {jobs.data[jobIndex].points.map((point) => (
                  <li key={point} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
