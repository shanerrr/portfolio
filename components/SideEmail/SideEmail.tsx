import { motion } from 'framer-motion';

export default function SideEmail() {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'tween', delay: 1.2, duration: 0.5 }}
      className="fixed bottom-0 right-5 left-auto hidden font-light after:mx-auto after:mt-5 after:block after:h-28 after:w-[1px] after:bg-yellow md:block"
    >
      <a
        className="text-xs tracking-widest opacity-60 transition-colors duration-150 hover:text-yellow"
        style={{ writingMode: 'vertical-rl', WebkitWritingMode: 'vertical-rl' }}
        href="mailto:shanuk@goonasekera.com"
      >
        shanuk@goonasekera.com
      </a>
    </motion.div>
  );
}
