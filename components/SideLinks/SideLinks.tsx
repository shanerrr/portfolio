import clsx from 'clsx';
import { motion } from 'framer-motion';
import socials from '~/data/socials.json';

export default function SideLinks() {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'tween', delay: 1.2, duration: 0.5 }}
      className="fixed bottom-0 left-5 hidden md:block"
    >
      <ul className="grid grid-cols-1 gap-2 text-xl sm:gap-3">
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
              rel="noopener noreferrer"
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
    </motion.div>
  );
}
