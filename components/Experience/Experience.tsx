import { useState } from 'react';
import clsx from 'clsx';

import jobs from '~/data/experience.json';

export default function Experience() {
  //hook to manage job state
  const [jobIndex, setJobIndex] = useState(0);

  return (
    <div id="experience" className="flex h-screen flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="mb-16 flex items-center whitespace-nowrap text-3xl font-extrabold before:mr-4 before:text-2xl before:font-semibold before:text-yellow before:content-['2.'] after:ml-5 after:flex after:w-full after:items-center after:border after:border-yellow/50">
          Where I've Worked
        </h2>

        <div className="grid grid-cols-4 gap-10">
          <section className="col-span-1">
            {jobs.data.map((job, idx) => (
              <button
                key={job.name}
                className={clsx(
                  'mb-4 block w-60 rounded-3xl py-4 px-6 text-2xl transition-all duration-75 hover:text-yellow',
                  {
                    'border-2 text-yellow': idx === jobIndex,
                  },
                )}
                onClick={() => setJobIndex(idx)}
              >
                {job.name}
              </button>
            ))}
          </section>
          <section className="col-span-2">
            <h3 className="text-2xl font-bold">
              {jobs.data[jobIndex].title}{' '}
              <a className="text-yellow" href={jobs.data[jobIndex].url}>
                @ {jobs.data[jobIndex].name}
              </a>
            </h3>
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
          </section>
        </div>
      </div>
    </div>
  );
}
