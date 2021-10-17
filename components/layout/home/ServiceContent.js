import Image from 'next/image';
import * as Ai from 'react-icons/ai';
import Link from 'next/link';

const ServiceContent = ({ services }) => {
  return (
    <>
      <div className="flex-1 flex-col my-8 ">
        <h2 className="font-bold text-2xl sm:text-3xl capitalize text-primary dark:text-white">Can we help you ?</h2>
      </div>
      <div className="gap-8 lg:gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service, index) => {
          return (
            <div key={index} className="flex justify-start ">
              <div className="w-full shadow-lg bg-white rounded-md p-8">
                <Image width={64} height={64} src={service.img} alt={service.alt} />
                <h3 className=" text-xl sm:text-2xl mb-1 font-bold capitalize text-primary dark:text-gray-900">{service.name}</h3>
                <div className="flex">
                  <h4 className="text-gray-400 text-lg sm:text-xl font-medium capitalize ">{service.subname}</h4>
                  <Link href={service.link}>
                    <Ai.AiOutlineArrowRight className="animate-bounce cursor-pointer ml-auto text-lg text-primary hover:text-secondary" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceContent;
