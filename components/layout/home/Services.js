import Image from 'next/image';
import Link from 'next/link';
import Gear from '../../Gear';

const Services = ({ serviceDetail }) => {
  return (
    <>
      <div className="py-12 dark:bg-dark rounded-lg ">
        <Gear />
        {serviceDetail.map((service, index) => {
          return (
            <>
              <div key={index} className="grid  grid-cols-1 gap-3 xl:grid-cols-2 my-12" id={service.link}>
                <div className="services order-2 lg:order-1">
                  <div className="flex flex-col justify-center items-center h-full p-4">
                    <div className="w-full px-2 lg:w-3/4">
                      <h3 className="font-bold text-primary text-xl sm:text-2xl capitalize dark:text-white">{service.title}</h3>
                      <h4 className="font-medium text-secondary text-lg sm:text-xl lowercase dark:text-white">{service.subTitle}</h4>
                      <p className="text-gray-700 text-justify text-base sm:text-lg font-light my-4 mb-8 dark:text-gray-300">{service.desc}</p>
                      <Link href={`/projects/${service.link === 'android' ? '' : service.link}`}>
                        <a className="p-2 px-4 capitalize rounded-md text-white bg-blue-600">see projects</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <Image className="object-contain" src={service.img} width={812} height={812} alt="web development" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Services;
