import { useEffect, useState } from 'react';

const CountdownComponent = () => {
  const [countdown, setCountdown] = useState([]);

  useEffect(() => {
    const nextMonth = new Date('October 23, 2021 00:00:00').getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const count = nextMonth - now;

      const seconds = Math.floor((count % (1000 * 60)) / 1000);
      const minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const days = Math.floor(count / (1000 * 60 * 60 * 24));

      setCountdown([
        {
          date: days,
          tagName: 'days',
        },
        {
          date: hours,
          tagName: 'hours',
        },
        {
          date: minutes,
          tagName: 'minutes',
        },
        {
          date: seconds,
          tagName: 'seconds',
        },
      ]);
    }, 1000);
  }, [countdown]);

  return (
    <div className="flex justify-around w-full">
      {countdown.length && countdown[0].date < 0 ? (
        <div></div>
      ) : (
        countdown.map((count, index) => {
          return (
            <div key={index} className="flex flex-col p-4 sm:p-8 md:p-12 xl:p-24">
              <span className="text-center text-primary font-bold text-3xl lg:text-4xl dark:text-white">{count.date}</span>
              <h5 className="text-center font-medium text-xl dark:text-white">{count.tagName}</h5>
            </div>
          );
        })
      )}{' '}
    </div>
  );
};

export default CountdownComponent;
