import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const DashboardPieChart: React.FC = () => {
  const data = [
    { name: "پرواز داخلی", value: 150 },
    { name: "پرواز خارجی", value: 100 },
    { name: "پرواز چارتر", value: 70 },
    { name: "پرواز تجاری", value: 40 },
  ];

  const COLORS = ["#0EA5E9", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart
      width={250}
      height={250}
      className="bg-white bg-opacity-70 rounded-full"
    >
      <Pie data={data} outerRadius={80} fill="#8884d8" dataKey="value" label>
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default DashboardPieChart;
