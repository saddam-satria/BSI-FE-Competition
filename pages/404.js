import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Custom404() {
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
    <div className="dark:bg-dark dark:text-white h-screen">
      <motion.div initial="out" animate="in" variants={variants} className="flex flex-col items-center">
        <Image className="object-cover " width={360} height={260} src="/img/error.png" />
        <h4 className="font-main sm:text-2xl text-lg font-medium my-2">Page does'nt exist, back to home</h4>
      </motion.div>
    </div>
  );
}
