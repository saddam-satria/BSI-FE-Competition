import Image from 'next/image';

const Services = () => {
  return (
    <div className="my-12 py-12 dark:bg-white bg-white rounded-lg ">
      <div className="flex justify-center">
        <span className="p-4  rounded-xl bg-blue-300 animate-spin border-2 hover:animate-none"></span>
        <span className="p-4  rounded-xl bg-blue-300 animate-spin border-2 hover:animate-none"></span>
        <span className="p-4  rounded-xl bg-blue-300 animate-spin border-2 hover:animate-none"></span>
      </div>
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
        <div className="order-2 2xl:order-1">
          <div className="flex flex-col justify-center items-center h-full p-4">
            <div className="w-3/4">
              <h3 className="font-bold text-primary text-2xl">Web develpopment</h3>
              <h4 className="font-medium text-secondary text-xl">We Develop Your Website</h4>
              <p className="text-gray-700 font-light my-4 dark:text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere magni ipsam natus, esse delectus optio accusamus sint quisquam numquam consequuntur ut distinctio veniam reprehenderit earum placeat dolore temporibus
                libero exercitationem vitae totam est similique error ea. Suscipit, quisquam eius?
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 2xl:order-2">
          <Image className="object-contain" src="/img/home/servicesWebBg.png" width={812} height={812} alt="web development" />
        </div>
      </div>
    </div>
  );
};

export default Services;
