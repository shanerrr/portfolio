import clsx from 'clsx';
import socials from '~/data/socials.json';

export default function SideLinks() {
  return (
    <div className="fixed bottom-0 left-5">
      <ul className="grid grid-cols-1 gap-3 text-xl">
        {socials.data.map((social, idx) => (
          <li
            className={clsx({
              'after:mx-auto after:mt-5 after:block after:h-28 after:w-[1px] after:bg-yellow':
                idx === socials.data.length - 1,
            })}
            key={social.name}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                `${social.icon} scale-100 transition-all duration-150 hover:scale-110 hover:text-yellow`,
                {
                  hidden: !social.showSocial,
                },
              )}
            />
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
