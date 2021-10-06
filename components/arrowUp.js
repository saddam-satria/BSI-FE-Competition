import Image from 'next/image';
import { useRouter } from 'next/router';

const arrowUp = ({ mode }) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(router.asPath);
  };

  return (
    <>
      <div className="fixed bottom-5 right-8" onClick={onClickHandler}>
        {!mode ? <Image width={50} height={50} src="/img/home/icons/arrowUp.png" /> : <Image width={50} height={50} src="/img/home/icons/arrowUpDark.png" />}
      </div>
      ;
    </>
  );
};

export default arrowUp;
