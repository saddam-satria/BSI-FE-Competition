import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Counter = ({ from, to }) => {
  const ref = useRef();

  useEffect(() => {
    const current = ref.current;

    const onControl = animate(
      from,
      to,
      {
        duration: 5,
        onUpdate(value) {
          current.textContent = value.toFixed(0);
        },
      },
      10000
    );
    return () => onControl.stop();
  }, [from, to]);
  return <span ref={ref} />;
};

export default Counter;
