import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed z-40 flex h-24 w-full items-center px-6 backdrop-blur md:px-10 lg:px-12">
      <div className="flex w-full justify-between">
        <div className="flex gap-8">
          <span className="relative -top-[6px] flex items-center font-handwriting text-4xl">
            sg
          </span>
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <a
                className="transition-all duration-150 before:mr-2 before:font-handwriting before:font-bold before:text-yellow before:content-['1.'] hover:text-lg hover:font-bold"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-150 before:mr-2 before:font-handwriting before:font-bold before:text-yellow before:content-['2.'] hover:text-lg hover:font-bold"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-150 before:mr-2 before:font-handwriting before:font-bold before:text-yellow before:content-['3.'] hover:text-lg hover:font-bold"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-150 before:mr-2 before:font-handwriting before:font-bold before:text-yellow before:content-['4.'] hover:text-lg hover:font-bold"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Link
            target="_blank"
            rel="noreferrer"
            href="/resume.pdf"
            className="bg-transparent px-4 py-2 text-sm transition-colors duration-150 hover:text-yellow"
          >
            Resume
          </Link>
          <a
            className="rounded-3xl border-2 border-yellow bg-transparent px-4 py-2 text-sm text-yellow transition-colors duration-150 hover:bg-yellow/5"
            href="#contact"
          >
            👋 Say Hello!
          </a>
        </div>
      </div>
    </nav>
  );
}
