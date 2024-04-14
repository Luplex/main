import React from 'react';
import { CubeIcon } from '@heroicons/react/24/outline';

// Accept a single 'data' prop which is an object containing all card data
const StatsCard = ({ data }) => {
  // Destructure all required properties from data object
  const { title, subtitle, value, percentage, barvalue } = data;

  return (
    <div className="w-[241.29px] h-44 p-[22.71px] bg-white rounded border border-zinc-200 flex flex-col justify-start items-start gap-[22.71px]">
      <div className="flex justify-start items-center gap-[12.60px]">
        <div className="bg-light-blue w-[45px] h-[45px] flex justify-center items-center relative">
          <CubeIcon className="h-7 w-7 text-blue-600" />
        </div>
        <div className="flex flex-col justify-start">
          <div className="text-gray-500 text-sm font-normal">{title}</div>
          <div className="text-gray-900 text-15px font-medium">{subtitle}</div>
        </div>
      </div>
      <div className="flex justify-start items-end gap-[4.26px]">
        <div className="text-gray-900 text-xl font-bold">{value}</div>
        <div className="text-blue-600 text-xs font-medium leading-[18.74px]">
          {percentage}% <span>↑</span>  {/* Ensure the percentage sign is added correctly */}
        </div>
      </div>
      <div className="w-[195px] bg-gray-200 rounded-full h-2 overflow-hidden">
      <div className="bg-blue-600 h-2 rounded-full transition-width duration-700 ease-in-out"
             style={{ width: `${barvalue}%` }}>
        </div>      </div>
    </div>
  );
};

export default StatsCard;
