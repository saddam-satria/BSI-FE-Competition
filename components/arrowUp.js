import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const arrowUp = ({ mode }) => {
  const router = useRouter();
  return (
    <>
      <div className="fixed bottom-5 right-8">
        <Link href={`/${router.asPath}`}>{!mode ? <Image width={50} height={50} src="/img/home/icons/arrowUp.png" /> : <Image width={50} height={50} src="/img/home/icons/arrowUpDark.png" />}</Link>
      </div>
      ;
    </>
  );
};

export default arrowUp;
