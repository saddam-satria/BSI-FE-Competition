import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Loaders from '../components/Loaders';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  const variants = {
    out: {
      opactiy: '50%',
    },
    in: {
      opactiy: '100%',
      y: 0,
    },
  };

  return (
    <div className="dark:bg-dark dark:text-white">
      <motion.div initial="out" animate="in" variants={variants} className="flex flex-col items-center">
        <Image className="object-cover " alt="page not  found" width={360} height={260} src="/img/error.png" />
        <h4 className="font-main sm:text-2xl text-lg font-medium my-2">404 Page doesnt exist, back to home</h4>
        <Loaders />
      </motion.div>
    </div>
  );
}
