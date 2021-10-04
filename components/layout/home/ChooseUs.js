import Image from 'next/image';
import Counter from '../../Counter';

const ChooseUs = () => {
  return (
    <div>
      <div className="flex flex-col  items-center xl:mt-32 mx-8 sm:mx-0">
        <div className="flex flex-col my-12 items-center">
          <h3 className="font-bold text-3xl capitalize text-primary dark:text-white">Why Choosing</h3>
          <h3 className="font-bold text-3xl text-primary dark:text-white">US</h3>
          <h5 className="text-secondary text-lg dark:text-gray-300">choose your real partner</h5>
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
    </div>
  );
};

export default ChooseUs;
