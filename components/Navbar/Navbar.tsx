import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed flex h-24 w-full items-center px-6 md:px-10 lg:px-12">
      <div className="flex w-full justify-between">
        <span className="font-handwriting text-4xl">sg</span>
        <ul className="flex items-center gap-8 text-sm">
          <li className="text-sm">
            <a
              className="before:mr-2 before:font-bold before:text-yellow before:content-['1.']"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="before:mr-2 before:font-bold before:text-yellow before:content-['2.']"
              href=""
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="before:mr-2 before:font-bold before:text-yellow before:content-['3.']"
              href=""
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="before:mr-2 before:font-bold before:text-yellow before:content-['4.']"
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-center">
          <Link
            target="_blank"
            rel="noreferrer"
            href="/resume.pdf"
            className="bg-transparent px-4 py-2 text-sm transition-colors duration-150 hover:text-yellow"
          >
            Resume
          </Link>
          <Link
            className="rounded-3xl border border-yellow bg-transparent px-4 py-2 text-sm text-yellow transition-colors duration-150 hover:bg-yellow/5"
            href="/#contact"
          >
            👋 Say Hello!
          </Link>
        </div>
      </div>
    </div>
  );
}
