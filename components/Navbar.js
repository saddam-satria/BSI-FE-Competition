import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as Fa from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [menus] = useState([
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'services',
      link: '/services',
    },
    {
      name: 'our projects',
      link: '/projects',
    },
  ]);

  const [active, setAcitve] = useState(false);
  const [mode, setMode] = useState(false);

  const sidebarHandler = () => {
    setAcitve(!active);
  };

  useEffect(() => {
    mode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, [mode]);

  const themeHandler = () => {
    setMode(!mode);
  };

  return (
    <div>
      <nav className=" bg-transparent py-3">
        <div className="mx-8 2xl:mx-48">
          <div className="flex py-3 px-4 sm:px-0">
            <Link href="/">
              <a className="text-primary hover:text-secondary dark:text-white dark:hover:text-blue-100 font-brand text-2xl sm:text-3xl font-medium">
                <Image className="object-contain" width={55} height={34} src="/img/home/icons/logo.png"></Image>
              </a>
            </Link>
            <div className="ml-auto mr-2 sm:hidden">
              <Fa.FaBars className="cursor-pointer text-lg text-primary hover:text-secondary dark:text-white dark:hover:text-blue-100" onClick={sidebarHandler} />
            </div>
            <ul
              className={`flex flex-col justify-center ml-auto fixed h-screen bg-gray-50 dark:bg-sidebar sm:dark:bg-transparent ${
                !active ? '-left-full' : 'left-0'
              } transition-all z-10 ease-in-out duration-1000 delay-75 sm:translate-x-0 sm:bg-transparent w-1/2 top-0 sm:static sm:w-auto sm:h-auto sm:flex-row `}
            >
              {menus.map((menu, index) => {
                return (
                  <li key={index} className="mx-4 py-5 sm:py-0">
                    <Link href={menu.link}>
                      <a className="capitalize text-primary hover:text-secondary  dark:text-white dark:hover:text-blue-100 font-medium text-lg">{menu.name}</a>
                    </Link>
                    <motion.div transition={{ easings: 'circIn' }} className={`${router.asPath === menu.link ? 'sm:flex' : 'sm:hidden'} hidden dark:bg-white mx-auto mt-0.5 w-1/2 p-0.5 rounded-full bg-blue-400`}></motion.div>
                  </li>
                );
              })}
            </ul>
            <motion.div initial={{ y: 0 }} animate={{ y: '100vh', y: 0 }} whileHover={{ left: 10, scale: 1.5 }} onClick={themeHandler} className=" z-10 cursor-pointer fixed -left-5  top-1/4 w-12 h-14 rounded ">
              <motion.img whileTap={{ x: '-100%' }} width={40} height={40} src={`/img/home/${mode ? 'moons.png' : 'sun.png'}`} />
            </motion.div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
