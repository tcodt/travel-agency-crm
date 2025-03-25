import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdOutlineAccountBalance,
  MdOutlineAttachMoney,
  MdOutlineFactory,
} from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import MenuItem from "../MenuItem/MenuItem";
import { LiaSuitcaseRollingSolid, LiaUsersSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { IoEarthOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineFolderOpen } from "react-icons/ai";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <aside
        className={`relative ${isOpen ? "w-40" : "w-12"} transition-all duration-300 ease-in-out py-7 px-2 rounded-lg h-full my-auto ms-2 border backdrop-blur-sm bg-white bg-opacity-50`}
      >
        {/* Sidebar Menu */}
        <nav className="relative h-full w-full">
          <ul className="flex flex-col gap-2 h-full justify-center overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-400">
            <MenuItem
              icon={<RiDashboardFill className="text-xl" />}
              label="داشبورد"
              to="/"
              isOpen={isOpen}
            />
            <MenuItem
              icon={<LiaUsersSolid className="text-xl" />}
              label="مسافر ها"
              to="/passengers"
              isOpen={isOpen}
            />
            <MenuItem
              icon={<HiOutlineUsers className="text-xl" />}
              label="همکار ها"
              to="/colleagues"
              isOpen={isOpen}
            />
            <MenuItem
              icon={<MdOutlineFactory className="text-xl" />}
              label="شرکت ها"
              to="/companies"
              isOpen={isOpen}
            />
            <MenuItem
              icon={<MdOutlineAccountBalance className="text-xl" />}
              label="حسابداری"
              to="/accountent"
              isOpen={isOpen}
            />
            <MenuItem
              icon={<IoEarthOutline className="text-xl" />}
              label="مراکز گردشگری"
              to="/tourist-centers"
              isOpen={isOpen}
            />
            <MenuItem
              icon={<HiOutlineClipboardDocumentList className="text-xl" />}
              label="پیگیری ها"
              to="/follow-ups"
              isOpen={isOpen}
            />
            <MenuItem
              icon={<MdOutlineAttachMoney className="text-xl" />}
              label="گزارشات مالی"
              to="/financial-reports"
              isOpen={isOpen}
            />
            <MenuItem
              icon={<LiaSuitcaseRollingSolid className="text-xl" />}
              label="کالا و خدمات"
              to="/services"
              isOpen={isOpen}
            />
            <MenuItem
              icon={<AiOutlineFolderOpen className="text-xl" />}
              label="قرارداد ها"
              to="/contracts"
              isOpen={isOpen}
            />
          </ul>
        </nav>
        {/* Toggle Button */}
        <button
          className={`fixed top-1/2 transform -translate-y-1/2 border backdrop-blur-sm bg-white p-2 rounded-full shadow-sm transition-all duration-300 ease-in-out z-50 ${
            isOpen ? "right-40" : "right-11"
          } ${isOpen ? "rotate-180" : "rotate-0"}`}
          onClick={toggleSidebar}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
