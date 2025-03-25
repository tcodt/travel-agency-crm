import React from "react";
import DashboardPieChart from "../../components/DashboardPieChart/DashboardPieChart";
import DashboardCustomChart from "../../components/DashboardCustomChart/DashboardCustomChart";
import { LuTriangleAlert } from "react-icons/lu";
import DashboardTable from "../../components/DashboardTable/DashboardTable";

const Dashboard: React.FC = () => {
  return (
    <div>
      <section className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-gray-800 font-bold">
            آمار پرواز های امروز
          </h3>
          <DashboardPieChart />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-gray-800 font-bold">
            بر اساس روز های هفته
          </h3>
          <DashboardCustomChart />
        </div>
      </section>
      <div className="my-8 w-4/5">
        <p className="flex items-center gap-1 text-base font-normal text-gray-800">
          <LuTriangleAlert color="yellow" size={25} /> لورم ایپسوم متن ساختگی با
          تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        </p>
        <p className="text-base font-normal text-gray-800 pt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>

      <DashboardTable />
    </div>
  );
};

export default Dashboard;
