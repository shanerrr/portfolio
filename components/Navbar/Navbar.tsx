import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed z-40 flex h-24 w-full items-center px-6 backdrop-blur md:px-10 lg:px-12">
      <div className="flex w-full justify-between">
        <h1 className="white relative flex animate-backgroundPan items-center bg-gradient-to-r from-yellow to-[#B8C9FF] bg-[length:200%_200%] bg-clip-text font-handwriting text-4xl font-bold text-transparent">
          sg
        </h1>
        <div className="flex gap-8">
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
              rel="noreferrer"
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
