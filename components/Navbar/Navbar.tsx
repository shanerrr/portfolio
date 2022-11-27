import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-6 md:px-10 lg:px-12 h-24 w-full flex items-center fixed">
      <div className="flex justify-between w-full">
        <span className="font-handwriting text-4xl">sg</span>
        <ul className="flex gap-8 items-center text-sm">
          <li className="text-sm">
            <a
              className="before:content-['.01'] before:mr-2 before:text-yellow before:font-bold"
              href=""
            >
              About
            </a>
          </li>
          <li>
            <a
              className="before:content-['.02'] before:mr-2 before:text-yellow before:font-bold"
              href=""
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="before:content-['.03'] before:mr-2 before:text-yellow before:font-bold"
              href=""
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="before:content-['.04'] before:mr-2 before:text-yellow before:font-bold"
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
            className="px-4 py-2 bg-transparent text-sm hover:text-yellow duration-150 transition-colors"
          >
            Resume
          </Link>
          <Link
            className="px-4 py-2 rounded-3xl bg-transparent border text-yellow border-yellow text-sm hover:bg-yellow/5 duration-150 transition-colors"
            href="/#contact"
          >
            👋 Say Hello!
          </Link>
        </div>
      </div>
    </div>
  );
}
