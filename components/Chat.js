import { useState } from 'react';
import Image from 'next/image';

const Chat = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="fixed bottom-0 right-1">
      <div className="p-2 w-80 flex " onClick={() => setActive(!active)}>
        <Image className="ml-auto" width={56} height={56} src="/img/home/icons/robot.png" alt="chat bot" />
        <div className="flex items-center p-1">
          <h5 className="text-lg font-medium">Hai, Im !lose assisten </h5>
        </div>
      </div>
      <div className={` bg-red-400 ${active ? 'w-80 sm:w-96 block' : 'w-60 sm:w-80 hidden'} p-1 rounded-t-xl`}>
        <h5 className="capitalize text-white font-medium p-2">Can I Help You ?</h5>
        <div className={`${active ? 'h-80' : 'h-0'} bg-white overflow-y-scroll rounded-lg`}>
          <div className="p-2">
            <div>
              <h6 className="p-2">Hello</h6>
            </div>
            <div className="flex justify-end">
              <h6 className="p-2">Hai</h6>
            </div>
          </div>
        </div>
        <div className="w-full mb-0">
          <form className="flex flex-row mx-1">
            <input type="text" className={`${active ? 'flex' : 'hidden'} focus:border-none focus:outline-none w-full py-2 px-3 rounded-lg mt-2`} placeholder="Message..." />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
