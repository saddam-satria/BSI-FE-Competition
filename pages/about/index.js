import { motion } from 'framer-motion';
import Image from 'next/image';

const about = () => {
  const variants = {
    out: {
      opacity: '0%',
      y: '100%',
    },
    in: {
      opacity: '100%',
      y: 0,
    },
  };
  return (
    <motion.div variants={variants} transition={{ duration: 2 }} initial="out" animate="in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div className="flex  ">
          <Image className="object-contain" alt="Jasa Pembuatan Website" width={512} height={463} src="/img/about/about-us.png" />
        </div>
        <div className="xl:w-4/5 my-12  flex flex-col justify-center">
          <div>
            <h1 className="text-2xl sm:text-4xl uppercase font-medium text-primary dark:text-white xl:tracking-wider">
              <strong className="sm:text-4xl sm:text-blue-700 sm:dark:text-blue-200"> Not lose </strong>
            </h1>
            <h4 className="font-medium text-secondary text-lg sm:text-xl lowercase dark:text-white">who really are we</h4>
          </div>
          <p className="text-gray-700 text-base sm:text-lg font-light my-4 dark:text-gray-300">We are a partner who is ready to help meet the needs of web development, android developer, and graphic design services </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div className="xl:w-4/5 my-12  flex flex-col justify-center">
          <div>
            <h1 className="text-2xl sm:text-4xl uppercase font-medium text-primary dark:text-white xl:tracking-wider">
              <strong className="sm:text-4xl sm:text-blue-700 sm:dark:text-blue-200"> About Logo </strong>
            </h1>
          </div>
          <p className="text-gray-700 text-base sm:text-lg font-light my-4 dark:text-gray-300">We are a partner who is ready to help meet the needs of web development, android developer, and graphic design services </p>
        </div>
        <div className="flex  justify-center">
          <Image className="object-contain" alt="Jasa Pembuatan Website" width={180} height={180} src="/img/logo.png" />
        </div>
      </div>
    </motion.div>
  );
};

export default about;
