import Image from 'next/image';
import Link from 'next/link';
import Gear from '../../Gear';

const Services = () => {
  return (
    <>
      <div className="py-12 dark:bg-dark bg-white rounded-lg ">
        <Gear />
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2 my-12" id="web">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col justify-center items-center h-full p-4">
              <div className="w-full px-2 lg:w-3/4">
                <h3 className="font-bold text-primary text-3xl capitalize dark:text-white">Web develpopment</h3>
                <h4 className="font-medium text-secondary text-xl capitalize dark:text-white">We Develop Your Website</h4>
                <p className="text-gray-700 text-lg text-justify font-light my-4 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere magni ipsam natus, esse delectus optio accusamus sint quisquam numquam consequuntur ut distinctio veniam reprehenderit earum placeat dolore temporibus
                  libero exercitationem vitae totam est similique error ea. Suscipit, quisquam eius?
                </p>
                <Link href="#">
                  <a className="p-2 px-4 rounded-md text-white bg-blue-600">More Info</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image className="object-contain" src="/img/home/servicesWebBg.png" width={812} height={812} alt="web development" />
          </div>
        </div>
        <hr className="dark:hidden" />

        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2 my-12" id="android">
          <div className="order-2">
            <div className="flex flex-col justify-center items-center h-full p-4">
              <div className="w-full px-2 lg:w-3/4">
                <h3 className="font-bold text-primary text-3xl capitalize dark:text-white">Android development</h3>
                <h4 className="font-medium text-secondary text-xl capitalize dark:text-white">We Develop Your Apps</h4>
                <p className="text-gray-700 text-lg text-justify font-light my-4 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere magni ipsam natus, esse delectus optio accusamus sint quisquam numquam consequuntur ut distinctio veniam reprehenderit earum placeat dolore temporibus
                  libero exercitationem vitae totam est similique error ea. Suscipit, quisquam eius?
                </p>
                <Link href="#">
                  <a className="p-2 px-4 rounded-md text-white bg-blue-600">More Info</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1">
            <Image className="object-contain" src="/img/home/servicesWebBg.png" width={812} height={812} alt="web development" />
          </div>
        </div>
        <hr className="dark:hidden" />
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2 my-12" id="design">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col justify-center items-center h-full p-4">
              <div className="w-full px-2 lg:w-3/4">
                <h3 className="font-bold text-primary text-3xl capitalize dark:text-white">Graphics designer</h3>
                <h4 className="font-medium text-secondary text-xl capitalize dark:text-white">We Design For Your Brands</h4>
                <p className="text-gray-700 text-lg text-justify font-light my-4 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere magni ipsam natus, esse delectus optio accusamus sint quisquam numquam consequuntur ut distinctio veniam reprehenderit earum placeat dolore temporibus
                  libero exercitationem vitae totam est similique error ea. Suscipit, quisquam eius?
                </p>
                <Link href="#">
                  <a className="p-2 px-4 rounded-md text-white bg-blue-600">More Info</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image className="object-contain" src="/img/home/servicesWebBg.png" width={812} height={812} alt="web development" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
