"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function LineChart({ data }: { data: any }) {
  const options = {
    layout: {
      padding: { top: 30, bottom: 10, left: 10, right: 10 }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
      datalabels: {
        display: true,
        color: "#6C3CF0",
        align: "top" as const,
        anchor: "end" as const,
        font: {
          weight: "bold" as const,
          size: 12,
        },
        formatter: (value: number) => {
          if (value >= 1000) return "$" + (value / 1000).toFixed(1) + "B";
          return "$" + value + "M";
        }
      },
    },
    scales: {
      y: { display: false, min: 0, suggestedMax: 2200 },
      x: { grid: { display: false } },
    },
    elements: {
      line: { tension: 0.4 },
    },
  };
  return <Line options={options} data={data} plugins={[ChartDataLabels]} />;
}

export function BarChart({ data }: { data: any }) {
  const options = {
    layout: {
      padding: { top: 30, bottom: 10, left: 10, right: 10 }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        display: true,
        color: "#10B981",
        align: "top" as const,
        anchor: "end" as const,
        font: {
          weight: "bold" as const,
          size: 12,
        },
        formatter: (value: number) => {
          if (value < 1) return (value * 1000) + "K";
          return value + "M";
        }
      },
    },
    scales: {
      y: { display: false, min: 0, suggestedMax: 25 },
      x: { grid: { display: false } },
    },
  };
  return <Bar options={options} data={data} plugins={[ChartDataLabels]} />;
}
