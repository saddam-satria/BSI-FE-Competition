import React from 'react';

const Gear = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-32 justify-between">
        <span className="p-4  rounded-xl bg-blue-300 dark:bg-blue-900 animate-spin border-2 hover:animate-none"></span>
        <span className="p-4  rounded-xl bg-blue-300 dark:bg-blue-900 animate-spin border-2 hover:animate-none"></span>
        <span className="p-4  rounded-xl bg-blue-300 dark:bg-blue-900 animate-spin border-2 hover:animate-none"></span>
      </div>
    </div>
  );
};

export default Gear;
