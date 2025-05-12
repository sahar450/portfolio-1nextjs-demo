"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import React from "react";

// ثبت ماژول‌ها
ChartJS.register(ArcElement, Tooltip, Legend);

// تعریف دیتا
const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Votes",
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderColor: ["#fff", "#fff", "#fff"],
      borderWidth: 1,
    },
  ],
};

// هندل‌های دلخواه برای hover
const handleHover = (event, legendItem, legend) => {
  console.log("Hovered on", legendItem.text);
};

const handleLeave = (event, legendItem, legend) => {
  console.log("Left", legendItem.text);
};

// تنظیمات
const options = {
  plugins: {
    legend: {
      onHover: handleHover,
      onLeave: handleLeave,
      position: "top",
    },
  },
};

export default function PieChart() {
  return <Pie data={data} options={options} />;
}
