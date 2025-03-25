import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "شنبه",
    uv: 120,
    pv: 80,
    amt: 200,
  },
  {
    name: "یک‌شنبه",
    uv: 150,
    pv: 100,
    amt: 250,
  },
  {
    name: "دوشنبه",
    uv: 180,
    pv: 120,
    amt: 300,
  },
  {
    name: "سه‌شنبه",
    uv: 200,
    pv: 140,
    amt: 340,
  },
  {
    name: "چهارشنبه",
    uv: 220,
    pv: 160,
    amt: 380,
  },
  {
    name: "پنج‌شنبه",
    uv: 250,
    pv: 180,
    amt: 430,
  },
  {
    name: "جمعه",
    uv: 300,
    pv: 200,
    amt: 500,
  },
];

const getIntroOfPage = (label) => {
  if (label === "شنبه") {
    return "پروازهای روز شنبه";
  }
  if (label === "یک‌شنبه") {
    return "پروازهای روز یک‌شنبه";
  }
  if (label === "دوشنبه") {
    return "پروازهای روز دوشنبه";
  }
  if (label === "سه‌شنبه") {
    return "پروازهای روز سه‌شنبه";
  }
  if (label === "چهارشنبه") {
    return "پروازهای روز چهارشنبه";
  }
  if (label === "پنج‌شنبه") {
    return "پروازهای روز پنج‌شنبه";
  }
  if (label === "جمعه") {
    return "پروازهای روز جمعه";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">اطلاعات بیشتر در اینجا نمایش داده می‌شود.</p>
      </div>
    );
  }

  return null;
};

const DashboardCustomChart: React.FC = () => {
  return (
    <BarChart
      className="bg-white rounded-xl bg-opacity-70"
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip
        content={
          <CustomTooltip
            active={undefined}
            payload={undefined}
            label={undefined}
          />
        }
      />
      <Legend />
      <Bar dataKey="pv" barSize={20} fill="#0ea5e9" />
    </BarChart>
  );
};

export default DashboardCustomChart;
