import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/home/Header';
import ServiceContent from '../components/layout/home/ServiceContent';
import ChooseUs from '../components/layout/home/ChooseUs';
import Teams from '../components/layout/home/Teams';
import Services from '../components/layout/home/Services';
import Countdown from '../components/layout/home/Countdown';

const Home = () => {
  const [services] = useState([
    {
      name: 'web development',
      subname: 'we develop your website',
      img: '/img/home/icons/web-icons.png',
      alt: 'website development',
      link: '#web',
    },
    {
      name: 'android developer',
      subname: 'we develop your apps',
      img: '/img/home/icons/android-icons.png',
      alt: 'android development',
      link: '#android',
    },
    {
      name: 'graphics design',
      subname: 'we design for your brands',
      img: '/img/home/icons/poster-icons.png',
      alt: 'graphics design',
      link: '#graphics',
    },
  ]);

  const [teams] = useState([
    {
      name: 'saddam',
      position: 'website developer',
      img: '/img/home/team/saddam.png',
      facebook: '',
      instagram: 'https://instagram.com/saddamsatria_12',
      linkedin: 'https://id.linkedin.com/in/saddam-satria-ardhi-837570170',
    },
    {
      name: 'rivan apta',
      position: 'Graphics Designer',
      img: '/img/home/team/rivan.png',
      facebook: '',
      instagram: 'https://www.instagram.com/rivanapta/',
      linkedin: 'https://www.linkedin.com/in/rivan-apta-kusuma-056082148/',
    },
    {
      name: 'aldi harlian',
      position: 'graphics designer',
      img: '/img/home/team/aldi.png',
      facebook: '',
      instagram: '',
      linkedin: '',
    },
  ]);

  const variants = {
    out: {
      opacity: '0%',
    },
    in: {
      opacity: '100%',
    },
  };

  const mouseEnterHandler = (_e, index) => {
    const message = document.querySelectorAll('.message-info');
    message[index].classList.remove('hidden');
  };
  const mouseLeaveHandler = (_e, index) => {
    const message = document.querySelectorAll('.message-info');
    message[index].classList.add('hidden');
  };

  const [serviceDetail] = useState([
    {
      title: 'website development',
      subTitle: 'we create your website business',
      desc: 'website technology can help you reach unlimited customers, you only need to provide the problem you are facing, then we will immediately solve the solution',
      link: 'web',
      img: '/img/home/servicesWebBg.png',
    },
    {
      title: 'android development',
      subTitle: 'we create your application business',
      desc: 'Android technology can help you reach unlimited customers, because everyone uses their cellphone all the time, you only need to provide the problem you are facing, then we will immediately solve the solution',
      link: 'android',
      img: '/img/home/androidService.png',
    },
    {
      title: 'graphics design',
      subTitle: 'we design for your brand',
      desc: 'graphic design can help you to create amazing content, you only need to give your ideas or submit everything to us, then we will immediately make it in the form of graphic design',
      link: 'graphics',
      img: '/img/home/graphicsService.png',
    },
  ]);
  return (
    <motion.div variants={variants} transition={{ duration: 2 }} initial={'out'} animate={'in'}>
      <Header />
      <ServiceContent services={services} />
      <ChooseUs />
      <Teams teams={teams} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
      <Services serviceDetail={serviceDetail} />
      <Countdown />
    </motion.div>
  );
};

export default Home;
