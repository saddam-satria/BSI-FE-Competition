import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <div>
      <div className="my-12 py-12 dark:bg-white bg-white rounded-lg ">
        <div className="flex justify-center">
          <span className="p-4  rounded-xl bg-blue-300 animate-spin border-2 hover:animate-none"></span>
          <span className="p-4  rounded-xl bg-blue-300 animate-spin border-2 hover:animate-none"></span>
          <span className="p-4  rounded-xl bg-blue-300 animate-spin border-2 hover:animate-none"></span>
        </div>
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2" id="web">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col justify-center items-center h-full p-4">
              <div className="w-3/4">
                <h3 className="font-bold text-primary text-2xl capitalize">Web develpopment</h3>
                <h4 className="font-medium text-secondary text-xl capitalize">We Develop Your Website</h4>
                <p className="text-gray-700 font-light my-4 dark:text-gray-900">
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

        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
          <div className="order-2">
            <div className="flex flex-col justify-center items-center h-full p-4">
              <div className="w-full px-3 lg:w-3/4">
                <h3 className="font-bold text-primary text-2xl capitalize">Android development</h3>
                <h4 className="font-medium text-secondary text-xl capitalize">We Develop Your Apps</h4>
                <p className="text-gray-700 font-light my-4 dark:text-gray-900">
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

        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col justify-center items-center h-full p-4">
              <div className="w-full px-3 lg:w-3/4">
                <h3 className="font-bold text-primary text-2xl capitalize">Graphics designer</h3>
                <h4 className="font-medium text-secondary text-xl capitalize">We Design For Your Brands</h4>
                <p className="text-gray-700 font-light my-4 dark:text-gray-900">
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
    </div>
  );
};

export default Services;
