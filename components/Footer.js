import Image from 'next/image';

export default function Footer() {
  return (
    <div className="dark:bg-dark dark:text-white flex justify-center relative bottom-0">
      <footer className="w-full py-12 flex justify-start">
        <Image className="object-contain" width={55} height={34} src="/img/home/icons/logo.png"></Image>
        <div className="flex justify-between w-1/2 mx-auto">
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </footer>
    </div>
  );
}
