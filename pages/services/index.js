import { motion } from 'framer-motion';

const Services = () => {
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
    <motion.div variants={variants} initial="out" animate="in" className="dark:text-white flex">
      <h1>Hell</h1>
    </motion.div>
  );
};

export default Services;
