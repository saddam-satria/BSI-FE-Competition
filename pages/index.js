// import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/home/Header';
// import ServiceContent from '../components/layout/home/ServiceContent';
// import ChooseUs from '../components/layout/home/ChooseUs';
// import Teams from '../components/layout/home/Teams';
// import Services from '../components/layout/home/Services';

const Home = () => {
  // const [services] = useState([
  //   {
  //     name: 'web development',
  //     subname: 'we develop your website',
  //     img: '/img/home/icons/web-icons.png',
  //     alt: 'website development',
  //   },
  //   {
  //     name: 'android developer',
  //     subname: 'we develop your apps',
  //     img: '/img/home/icons/android-icons.png',
  //     alt: 'android development',
  //   },
  //   {
  //     name: 'graphics design',
  //     subname: 'we design for your brands',
  //     img: '/img/home/icons/poster-icons.png',
  //     alt: 'graphics design',
  //   },
  // ]);

  // const [teams] = useState([
  //   {
  //     name: 'saddam',
  //     position: 'front end dev',
  //     img: '/img/home/team/saddam.png',
  //     facebook: '',
  //     instagram: 'https://instagram.com/saddamsatria_12',
  //     linkedin: 'https://id.linkedin.com/in/saddam-satria-ardhi-837570170',
  //   },
  //   {
  //     name: 'rivan apta',
  //     position: 'Graphic Designer',
  //     img: '/img/home/team/rivan.png',
  //     facebook: '',
  //     instagram: '',
  //     linkedin: '',
  //   },
  //   {
  //     name: 'aldi harlian',
  //     position: 'graphic designer',
  //     img: '/img/home/team/aldi.png',
  //     facebook: '',
  //     instagram: '',
  //     linkedin: '',
  //   },
  // ]);

  const variants = {
    out: {
      opacity: '0%',
    },
    in: {
      opacity: '100%',
    },
  };

  // const mouseEnterHandler = (_e, index) => {
  //   const message = document.querySelectorAll('.message-info');
  //   message[index].classList.remove('hidden');
  // };
  // const mouseLeaveHandler = (_e, index) => {
  //   const message = document.querySelectorAll('.message-info');
  //   message[index].classList.add('hidden');
  // };

  return (
    <motion.div variants={variants} transition={{ duration: 2 }} initial={'out'} animate={'in'}>
      <Header />
      {/* <ServiceContent services={services} />
      <ChooseUs />
      <Teams teams={teams} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
      <Services /> */}
    </motion.div>
  );
};

export default Home;
