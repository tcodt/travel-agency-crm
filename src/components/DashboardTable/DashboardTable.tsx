import React from "react";
import { LuPlaneLanding, LuPlaneTakeoff } from "react-icons/lu";

const DashboardTable: React.FC = () => {
  const flights = [
    { from: "تهران", to: "استانبول", takeoff: "08:30", landing: "11:45" },
    { from: "مشهد", to: "دبی", takeoff: "10:15", landing: "13:30" },
    { from: "شیراز", to: "دوحه", takeoff: "14:00", landing: "16:20" },
    { from: "اصفهان", to: "باکو", takeoff: "18:45", landing: "21:00" },
  ];

  return (
    <div className="p-6">
      <div className="bg-white bg-opacity-70 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">
          برنامه پروازها
        </h2>
        <table className="w-full border-collapse text-right" dir="rtl">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">مبدا</th>
              <th className="p-3">مقصد</th>
              <th className="p-3">زمان پرواز</th>
              <th className="p-3">زمان فرود</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{flight.from}</td>
                <td className="p-3">{flight.to}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <LuPlaneTakeoff className="w-5 h-5 text-blue-500" />
                    <span>{flight.takeoff}</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <LuPlaneLanding className="w-5 h-5 text-green-500" />
                    <span>{flight.landing}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
