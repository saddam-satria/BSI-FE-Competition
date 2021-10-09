import Image from 'next/image';
import CountdownComponent from '../../CountdownComponent';

const Countdown = () => {
  return (
    <div>
      <div className="flex flex-col  items-center xl:mt-32">
        <div className="flex flex-col my-12 items-center">
          <h2 className="font-bold text-2xl sm:text-3xl capitalize text-primary dark:text-white">We are will open!</h2>
          <CountdownComponent />
        </div>
        <Image alt="Jasa Pembuatan Website" width={680} height={512} src="/img/home/countdown.png" />
      </div>
    </div>
  );
};

export default Countdown;
