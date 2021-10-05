import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Loaders from '../components/Loaders';

export default function Custom500() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  const variants = {
    out: {
      opactiy: '0%',
      y: '100%',
    },
    in: {
      opactiy: '100%',
      y: 0,
    },
  };

  return (
    <div className="dark:bg-dark dark:text-white ">
      <motion.div initial="out" animate="in" variants={variants} className="flex flex-col items-center">
        <Image className="object-cover " alt="page not  found" width={360} height={260} src="/img/error.png" />
        <h4 className="font-main sm:text-2xl text-lg font-medium my-2">500 Page doesnt exist, back to home</h4>
      </motion.div>
      <Loaders />
    </div>
  );
}
