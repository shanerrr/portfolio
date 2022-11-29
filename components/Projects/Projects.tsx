import Image from 'next/image';
import projects from '~/data/projects.json';

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex h-full min-h-screen flex-col justify-center"
    >
      <h2 className="mb-16 flex items-center whitespace-nowrap text-3xl font-extrabold before:mr-4 before:font-handwriting before:text-2xl before:font-semibold before:text-yellow before:content-['3.'] after:ml-4 after:w-full after:border after:border-yellow/50">
        Things I&apos;ve Built 💻
      </h2>
      <section className="grid gap-y-16">
        {projects.data
          .filter((project) => project.isSpotlight)
          .map((project) => (
            <div key={project.name} className="col-span-4">
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
                <h3 className="text-md inline self-start rounded-3xl bg-yellow/10 py-2 px-4 leading-loose">
                  Spotlight Project
                </h3>
              </div>
              <h1 className="mt-3 text-3xl font-bold">{project.name}</h1>
              <h4 className="text-xs text-yellow opacity-40">{project.time}</h4>
              <p className="mt-2 text-lg">{project.description}</p>
              <div className="flex items-center justify-between py-4">
                <div className="flex gap-3 text-sm opacity-60">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 text-2xl">
                  {project.repo && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="fa-brands fa-github transition-colors duration-150 hover:text-yellow"
                      href={project.repo as string}
                    />
                  )}
                  {project.external && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="fa-regular fa-arrow-up-right-from-square transition-colors duration-150 hover:text-yellow"
                      href={project.external as string}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
