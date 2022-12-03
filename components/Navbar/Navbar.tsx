import Link from 'next/link';
import { motion } from 'framer-motion';
interface NavbarProps {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
}

export default function Navbar({ setNavOpen, navOpen }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'tween', delay: 1.2, duration: 0.2 }}
      className="fixed z-40 flex h-24 w-full items-center px-6 backdrop-blur md:px-10 lg:px-12"
    >
      <div className="flex w-full justify-between">
        <Link
          href="/"
          className="relative -top-3 flex items-center font-handwriting text-4xl font-bold transition-all duration-150 hover:scale-125 hover:text-yellow"
        >
          sg
        </Link>
        <div className="flex gap-8">
          {/* mobile nav */}
          <div className="z-50 block sm:hidden">
            <button
              type="button"
              onClick={() => setNavOpen(!navOpen)}
              className="relative h-10 w-12 rounded-xl"
            >
              <div className="absolute right-0 h-[2px] w-1/2 rounded bg-white before:absolute before:left-auto before:right-0 before:-top-2 before:block before:h-[2px] before:w-[120%] before:bg-white after:absolute after:left-auto after:right-0 after:top-2 after:block after:h-[2px] after:w-5/6 after:bg-white" />
            </button>
          </div>
          {navOpen && (
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 0.15 }}
              className="fixed top-0 right-0 z-40 flex h-screen w-60 flex-col gap-8 bg-navygreen py-24 px-6 shadow-2xl"
            >
              <ul className="flex flex-col gap-8 text-lg">
                <li>
                  <a
                    onClick={() => setNavOpen(!navOpen)}
                    className="transition-all duration-150 before:mr-2 before:font-handwriting before:font-bold before:text-yellow before:content-['1.'] hover:text-lg hover:font-bold"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setNavOpen(!navOpen)}
                    className="transition-all duration-150 before:mr-2 before:font-handwriting before:font-bold before:text-yellow before:content-['2.'] hover:text-lg hover:font-bold"
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setNavOpen(!navOpen)}
                    className="transition-all duration-150 before:mr-2 before:font-handwriting before:font-bold before:text-yellow before:content-['3.'] hover:text-lg hover:font-bold"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setNavOpen(!navOpen)}
                    className="transition-all duration-150 before:mr-2 before:font-handwriting before:font-bold before:text-yellow before:content-['4.'] hover:text-lg hover:font-bold"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="mx-auto">
                <Link
                  onClick={() => setNavOpen(!navOpen)}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/resume.pdf"
                  className="rounded-3xl border-2 border-yellow bg-transparent px-4 py-2 text-lg text-yellow transition-colors duration-150 hover:bg-yellow/5"
                >
                  Resume
                </Link>
              </div>
            </motion.aside>
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
    </motion.nav>
  );
}
