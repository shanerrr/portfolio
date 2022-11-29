import { motion } from 'framer-motion';

export default function Loader() {
  const transition: { duration: number; ease: number[] } = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
  };

  return (
    <motion.div
      animate={{ opacity: 0 }}
      transition={{ delay: 1 }}
      className="fixed z-50 flex h-screen w-screen items-center justify-center bg-white"
    >
      <motion.div
        animate={{
          y: ['100vh', '0vh', '0vh', '0vh'],
          height: ['16rem', '16rem', '1000rem'],
          width: ['16rem', '16rem', '1000rem'],
          opacity: [1, 1, 0],
        }}
        transition={{ duration: 2, times: [0.1, 0.2] }}
        className="rounded-full bg-navygreen"
      />
    </motion.div>
  );
}
