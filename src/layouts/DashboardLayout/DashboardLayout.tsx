import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopNav from "../../components/TopNav/TopNav";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <TopNav />
        </div>
        <div className="flex gap-10 h-[85vh] w-[95%]">
          <Sidebar />
          <main className="flex-1 bg-white bg-opacity-50 backdrop-blur-sm border rounded-lg p-4 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-10 [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-400">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
