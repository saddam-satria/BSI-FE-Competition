import { motion } from 'framer-motion';

const Gear = () => {
  return (
    <div className="h-0.5 mx-16 flex items-center bg-gray-200">
      <motion.div
        initial={{
          x: '-30%',
        }}
        animate={{
          x: '15%',

          transition: {
            yoyo: Infinity,
            duration: 2,
          },
        }}
        className="flex justify-center w-full"
      >
        <div className="flex w-32 justify-between">
          <span className="p-4  rounded-xl bg-blue-300 dark:bg-blue-900 animate-spin border-2 hover:animate-none"></span>
          <span className="p-4  rounded-xl bg-blue-300 dark:bg-blue-900 animate-spin border-2 hover:animate-none"></span>
          <span className="p-4  rounded-xl bg-blue-300 dark:bg-blue-900 animate-spin border-2 hover:animate-none"></span>
        </div>
      </motion.div>
    </div>
  );
};

export default Gear;
