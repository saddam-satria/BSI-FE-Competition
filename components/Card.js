import Image from 'next/image';
import Link from 'next/link';

export default function Card({ title, img, subTitle, tags }) {
  return (
    <div className="dark:bg-white shadow-lg rounded-md">
      <Image className="object-contain" width={1200} height={512} src={img} alt={subTitle} />

      <div className="p-8">
        <h5 className="text-xl text-primary font-bold capitalize">{title}</h5>
        <h6 className="text-lg my-2 text-secondary font-medium capitalize">{subTitle}</h6>
        <div className="flex justify-between">
          {tags.map((tag, index) => {
            return (
              <div className="flex flex-col">
                <span key={index} className="py-1 px-2 sm:px-3 xl:px-4 rounded-md bg-green-200 text-lg capitalize">
                  {tag}
                </span>

                <Link href={`https://wa.me/6285718483826?text=${'https://not-lose.netlify.app' + img}`}>
                  <a target="_blank" className="mt-2 p-2 w-28 text-white rounded-xl text-center bg-blue-600 ">
                    Order Now
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
