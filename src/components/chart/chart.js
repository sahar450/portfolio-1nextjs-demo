'use client';
import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

// ثبت ماژول‌ها
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

// داده‌ها
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Visitors',
      data: [120, 200, 150, 170, 220],
      borderColor: 'rgb(75,192,192)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      tension: 0.3,
      fill: true,
    },
  ],
};

// تنظیمات
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Visitors',
    },
  },
};

export default function LineChart() {
  return <Line data={data} options={options} />;
}
