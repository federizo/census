"use client"
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent: React.FC = () => {
  const labels = [
    "Caypombo",
    "Balasing",
    "Silangan",
    "Tigbe",
    "M.Sapa",
    "City Land",
    
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Female",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        label: "Male",
        data: [45, 69, 60, 91, 76, 65, 50],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart of Population in Pulong Buhangin",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ChartComponent;
