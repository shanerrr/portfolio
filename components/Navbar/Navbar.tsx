import Link from 'next/link';

interface NavbarProps {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
}

export default function Navbar({ setNavOpen, navOpen }: NavbarProps) {
  return (
    <nav className="fixed z-40 flex h-24 w-full items-center px-6 backdrop-blur md:px-10 lg:px-12">
      <div className="flex w-full justify-between">
        <Link
          href="/"
          className="relative -top-3 flex items-center font-handwriting text-4xl font-bold transition-all duration-150 hover:scale-125 hover:text-yellow"
        >
          sg
        </Link>
        <div className="relative flex gap-8">
          {/* mobile nav */}
          <div className="block sm:hidden">
            <button
              type="button"
              onClick={() => setNavOpen(!navOpen)}
              className="relative h-10 w-12 rounded-xl"
            >
              <div className="absolute right-0 h-[2px] w-1/2 rounded bg-white before:absolute before:left-auto before:right-0 before:-top-2 before:block before:h-[2px] before:w-[120%] before:bg-white after:absolute after:left-auto after:right-0 after:top-2 after:block after:h-[2px] after:w-5/6 after:bg-white" />
            </button>
          </div>
          {navOpen && (
            <aside className="absolute top-full right-0 h-96 w-60 rounded-xl bg-navygreen py-4 px-6 shadow-2xl">
              <ul className="flex h-full flex-col gap-8 text-lg">
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
              <div className="">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/resume.pdf"
                  className="rounded-3xl border-2 border-yellow bg-transparent px-4 py-2 text-lg text-yellow transition-colors duration-150 hover:bg-yellow/5"
                >
                  Resume
                </Link>
              </div>
            </aside>
          )}

          {/* desktop nav */}
          <ul className="hidden items-center gap-8 text-sm sm:flex">
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
          <div className="hidden justify-center sm:flex">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/resume.pdf"
              className="rounded-3xl border-2 border-yellow bg-transparent px-4 py-2 text-sm text-yellow transition-colors duration-150 hover:bg-yellow/5"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
