import Image from 'next/image';
import Counter from '../../Counter';

const ChooseUs = () => {
  return (
    <>
      <div className="flex flex-col  items-center xl:mt-32">
        <div className="flex flex-col my-12 items-center">
          <h2 className="font-bold text-2xl sm:text-3xl capitalize text-primary dark:text-white">Why Choosing</h2>
          <h2 className="font-bold text-2xl sm:text-3xl text-primary dark:text-white">US</h2>
          <h4 className="text-secondary text-lg sm:text-xl dark:text-gray-300">choose your real partner</h4>
        </div>
        <Image alt="Jasa Pembuatan Website" width={680} height={512} src="/img/home/chooseBg.png" />
      </div>
      <div className=" mt-4 p-4 xl:p-32">
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center text-center">
            <span className="text-secondary text-xl lg:text-3xl dark:text-gray-300 font-bold">
              <Counter from={0} to={15} />
            </span>
            <h5 className="text-secondary text-lg lg:text-xl dark:text-gray-300">Projects</h5>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-secondary text-xl lg:text-3xl dark:text-gray-300 font-bold">
              <Counter from={0} to={5} />
            </span>
            <h5 className="text-secondary text-lg lg:text-xl dark:text-gray-300">Done Projects</h5>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-secondary text-xl lg:text-3xl dark:text-gray-300 font-bold">
              <Counter from={0} to={1000} />
            </span>
            <h5 className="text-secondary text-lg lg:text-xl dark:text-gray-300 capitalize">working days</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
