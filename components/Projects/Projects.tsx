import Image from 'next/image';
import projects from '~/data/projects.json';

export default function Projects() {
  return (
    <div id="projects" className="flex h-screen flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="mb-16 flex items-center whitespace-nowrap text-3xl font-extrabold before:mr-4 before:font-handwriting before:text-2xl before:font-semibold before:text-yellow before:content-['3.'] after:ml-5 after:flex after:w-full after:items-center after:border after:border-yellow/50">
          Things I've Built
        </h2>
        <section className="grid grid-cols-6 gap-y-6">
          {projects.data
            .filter((project) => project.isSpotlight)
            .map((project) => (
              <div
                key={project.name}
                className="col-span-5 col-start-2 bg-yellow/10"
              >
                <div className="grid grid-cols-4 gap-4">
                  <div className="relative">
                    <Image
                      className="object-contain"
                      src="Image"
                      fill={true}
                      quality={100}
                      alt={project.name}
                      loader={() => project.logo}
                    />
                  </div>
                  <div className="col-span-4">
                    <h3 className="text-md leading-loose text-yellow">
                      Spotlight Project
                    </h3>
                    <h1 className="text-3xl font-bold">{project.name}</h1>
                    <p className="mt-2 text-lg">{project.description}</p>
                  </div>
                  {/* <div className="flex gap-6 text-2xl">
                    {project.repo && (
                      <a
                        className="fa-brands fa-github"
                        href={project.repo as string}
                      />
                    )}
                    {project.external && (
                      <a
                        className="fa-regular fa-arrow-up-right-from-square"
                        href={project.external as string}
                      />
                    )}
                  </div> */}
                </div>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
}
