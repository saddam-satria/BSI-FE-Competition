import Image from 'next/image';
import Link from 'next/link';

export default function Card({ img, subTitle }) {
  return (
    <div className="dark:bg-transparent bg-transparent">
      <Link href={img}>
        <a target="_blank">
          <Image className="object-contain" width={1080} height={1080} src={img} alt={subTitle} />
        </a>
      </Link>
    </div>
  );
}
