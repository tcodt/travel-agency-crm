import React from "react";
import { FaRegBell } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";

const TopNav: React.FC = () => {
  return (
    <header className="h-12 w-[90%] mt-2 rounded-lg overflow-hidden border backdrop-blur-sm bg-white bg-opacity-50 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-xl text-gray-800 hover:text-sky-500 transition-colors">
            <IoSettingsOutline />
          </button>
          <div className="border-2 rounded-full border-sky-500">
            <img
              src="/images/user.avif"
              alt="User"
              className="w-8 h-8 object-contain rounded-full"
            />
          </div>
          <button className="text-xl text-gray-800 hover:text-sky-500 transition-colors">
            <FaRegBell />
          </button>
          <input
            type="text"
            placeholder="جستجو"
            className="rounded-xl bg-white bg-opacity-80 h-7 text-sm outline-none text-gray-800 border-2 px-2 focus:border-sky-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <GiCommercialAirplane className="text-2xl text-sky-500" />
          <h3 className="text-gray-800 text-xl font-bold">
            LOGO <span className="text-sky-500">FLY</span>
          </h3>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
