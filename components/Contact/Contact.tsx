import { useRef } from 'react';
import { useInView, motion, Variants } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sectionVariants: Variants = {
    inital: {},
    animate: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const childVariants = {
    inital: {
      opacity: 0,
      y: 50,
    },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="mx-auto flex h-screen max-w-xl flex-col justify-center"
    >
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="inital"
        animate={isInView ? 'animate' : 'inital'}
      >
        <motion.h2
          variants={childVariants}
          className="flex items-center justify-center whitespace-nowrap text-2xl font-extrabold before:mr-4 before:font-handwriting before:text-2xl before:font-semibold before:text-yellow before:content-['4.']"
        >
          What&apos;s Next? 🤙
        </motion.h2>
        <motion.h1
          variants={childVariants}
          className="my-8 text-center text-5xl font-bold text-yellow"
        >
          Get in Touch
        </motion.h1>
        <motion.p variants={childVariants} className="text-center text-xl">
          I am always looking for new opportunities. If you ever want to chat,
          ask a question, or just want to say hello, ill try my best to get back
          to you!
        </motion.p>
        <motion.div variants={childVariants} className="flex justify-center">
          <a
            href="mailto:shanuk@goonasekera.com"
            className="mt-8 rounded-3xl border-2 border-yellow bg-transparent px-6 py-4 text-xl transition-colors duration-150 hover:bg-yellow/5"
          >
            Say Hello
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
