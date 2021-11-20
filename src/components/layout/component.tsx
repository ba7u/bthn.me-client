import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export const LayoutComponent: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'linear' }}
        className='
          flex flex-col items-start w-full pt-10
          px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
          pt-24 h-full
        '
      >
        {children}
      </motion.main>
    </div>
  );
};
