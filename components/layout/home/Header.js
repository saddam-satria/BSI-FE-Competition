import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [status, setStatus] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://v1.nocodeapi.com/saddam/google_sheets/FgZQwJZvUGlSFeLc?tabId=!lose', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([[e.target.email.value]]),
      });
      if (res.status === 400 || res.status === 404) {
        throw new Error({ message: 'Error' });
      }
      setStatus('success');
      e.target.email.value = '';
      setTimeout(() => {
        setStatus('');
      }, 3000);
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
      <div className="lg:order-1 xl:w-4/5 order-2 my-12  flex flex-col justify-center">
        <div>
          <h1 className="text-2xl sm:text-4xl uppercase font-medium text-primary dark:text-white xl:tracking-wider">
            <strong className="sm:text-5xl sm:text-blue-700 sm:dark:text-blue-200"> WE SOLVE DIGITAL </strong>
            <br className="hidden sm:block" /> PROBLEM OF YOUR BUSINESS!
          </h1>
        </div>
        <p className="text-gray-700 text-justify text-base sm:text-lg font-light my-4 dark:text-gray-300">
          We can help your business become a full service technology. In today's era a business must use digital technology. We are technology professionals, trust us, then your business will become a digital technology service{' '}
        </p>
        <div className="py-5">
          <form onSubmit={onSubmit}>
            <label htmlFor="email"></label>
            <input
              type="email"
              required
              autoComplete="email"
              name="email"
              placeholder="enter your email"
              className="px-3 text-base w-full sm:w-auto sm:px-5 mb-4 py-2 rounded mr-2 shadow-md focus:border-none focus:outline-none focus-within:text-gray-600 "
            />
            <motion.button
              type="submit"
              whileHover={{
                scale: 1,
              }}
              className=" px-3 py-2 sm:px-8 text-white bg-primary hover:bg-secondary rounded-md dark:bg-blue-300 dark:text-black text-base dark:hover:bg-blue-200"
            >
              subscribe
            </motion.button>
          </form>
        </div>
        {status === '' ? (
          ''
        ) : status === 'success' ? (
          <motion.span initial={{ opacity: '100%' }} animate={{ opacity: 0 }} transition={{ duration: 3 }} className="py-2 px-4 bg-green-500 text-white lg:w-1/2 rounded-lg">
            Success
          </motion.span>
        ) : (
          <span className="py-2 px-4 bg-red-500 text-mobile-secondary-text text-white  lg:w-1/2 rounded-lg">Error</span>
        )}
      </div>
      <div className="flex justify-center  lg:order-2 order-1">
        <Image className="object-contain" alt="Jasa Pembuatan Website" width={512} height={463} src="/img/home/homeBg.png" />
      </div>
    </div>
  );
};

export default Header;
