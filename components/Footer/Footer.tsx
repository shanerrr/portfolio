import socials from '~/data/socials.json';
import clsx from 'clsx';

export default function Footer() {
  return (
    <div className="mb-8 gap-2 flex flex-col items-center justify-center">
      <ul className="flex md:hidden gap-3 text-xl">
        {socials.data.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(social.icon, {
                hidden: !social.showSocial,
              })}
            />
          </li>
        ))}
      </ul>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs opacity-70 transition-all duration-200 hover:text-yellow hover:opacity-100"
        href="https://github.com/shanerrr/portfolio"
      >
        Designed & Built by Shane Goonasekera
      </a>
    </div>
  );
}
