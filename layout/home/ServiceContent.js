import Image from 'next/image';
import * as Ai from 'react-icons/ai';

const ServiceContent = ({ services }) => {
  return (
    <>
      <div className="flex-1 flex-col my-8 ">
        <h3 className="  font-bold text-2xl capitalize text-primary dark:text-white">Can we help you ?</h3>
      </div>
      <div className="gap-8 2xl:gap-3 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 ">
        {services.map((service, index) => {
          return (
            <div key={index} className="flex justify-start ">
              <div className="w-full shadow-lg bg-white rounded-md p-8">
                <Image width={64} height={64} src={service.img} alt={service.alt} />
                <h4 className=" text-lg font-bold capitalize text-primary dark:text-gray-900">{service.name}</h4>
                <div className="flex">
                  <h6 className="text-gray-400 text-md font-medium capitalize ">{service.subname}</h6>
                  <Ai.AiOutlineArrowRight className="animate-bounce cursor-pointer ml-auto text-lg text-primary hover:text-secondary" />
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
