import Image from 'next/image';

export default function Card({ title, img, subTitle, tags }) {
  return (
    <div className="dark:bg-white shadow-lg rounded-md">
      <Image className="object-cover" width={1200} height={512} src={img} alt={subTitle} />

      <div className="p-8">
        <h5 className="text-xl text-primary font-bold capitalize">{title}</h5>
        <h6 className="text-lg my-2 text-secondary font-medium capitalize">{subTitle}</h6>
        <div className="flex justify-between">
          {tags.map((tag, index) => {
            return (
              <span key={index} className="py-1 px-2 sm:px-3 xl:px-4 rounded-md bg-green-200 text-lg capitalize">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
