import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as Fa from 'react-icons/fa';

const Teams = ({ teams, mouseEnterHandler, mouseLeaveHandler }) => {
  return (
    <>
      <div className="">
        <div className="py-16">
          <div className="my-14">
            <h2 className="font-bold text-2xl sm:text-3xl capitalize text-primary dark:text-white">Who are we ?</h2>
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-1">
            <div className="2xl:flex my-12 md:justify-center 2xl:justify-start sm:hidden ">
              <Image alt="teamwork" width={412} height={412} src="/img/home/usBg.png" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {teams.map((team, index) => {
                return (
                  <div key={index}>
                    <span className={`p-4 message-info text-mobile-secondary-text bg-blue-100 rounded-xl z-10 shadow-lg hidden absolute`}>Hai, I'm {team.name}</span>
                    <motion.div whileHover={{ scale: 1.05 }} onMouseEnter={(e) => mouseEnterHandler(e, index)} onMouseLeave={(e) => mouseLeaveHandler(e, index)} className="cursor-pointer lg:w-full p-4 bg-white shadow-lg rounded-md">
                      <div className="flex justify-center">
                        <Image alt={team.name} width={312} height={312} src={team.img} />
                      </div>
                      <div className="py-12">
                        <h4 className="mb-2 text-lg sm:text-xl font-bold capitalize text-primary dark:text-gray-900">{team.name}</h4>
                        <h5 className="text-gray-400 text-lg sm:text-xl font-medium capitalize ">{team.position}</h5>
                        <div className="mt-2 flex">
                          <motion.span className="hover:text-blue-500" whileHover={{ scale: 1.5 }}>
                            <Link href={team.facebook}>
                              <a target="_blank">
                                <Fa.FaFacebookSquare className="text-3xl text-primary" />
                              </a>
                            </Link>
                          </motion.span>
                          <motion.span className="hover:text-blue-500" whileHover={{ scale: 1.5 }}>
                            <Link href={team.instagram}>
                              <a target="_blank">
                                <Fa.FaInstagram className="mx-2 text-3xl text-primary" />
                              </a>
                            </Link>
                          </motion.span>
                          <motion.span className="hover:text-blue-500" whileHover={{ scale: 1.5 }}>
                            <Link href={team.linkedin}>
                              <a target="_blank">
                                <Fa.FaLinkedin className="text-3xl text-primary" />
                              </a>
                            </Link>
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
