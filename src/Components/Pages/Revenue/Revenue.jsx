import React from "react";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Revenue.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const monthlyRevenue = [
  { month: "January", amount: 12000 },
  { month: "February", amount: 15000 },
  { month: "March", amount: 13000 },
  { month: "April", amount: 16000 },
  { month: "May", amount: 14500 },
  { month: "June", amount: 17000 },
  { month: "July", amount: 16500 },
  { month: "August", amount: 18000 },
  { month: "September", amount: 17500 },
  { month: "October", amount: 19000 },
  { month: "November", amount: 18500 },
  { month: "December", amount: 20000 },
];
const Revenue = () => {
  const chartData = {
    labels: monthlyRevenue.map((data) => data.month),
    datasets: [
      {
        label: "Monthly Revenue",
        data: monthlyRevenue.map((data) => data.amount),
        borderColor: "rgba(17, 182, 182, 1)",
        backgroundColor: "rgba(17, 182, 182, 0.2)",
        fill: true,
        tension: 0.1,
        pointBorderColor: "white",
        pointBackgroundColor: "white",
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    color: "white",
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Monthly Revenue Dynamics",
        color: "white",
      },
      tooltip: {
        titleColor: "white",
        bodyColor: "white",
        borderColor: "white",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          color: "white",
        },
        title: {
          display: true,
          text: "Revenue ($)",
          color: "white",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          color: "white",
        },
        title: {
          display: true,
          text: "Month",
          color: "white",
        },
      },
    },
  };
  const navigate = useNavigate();
  return (
    <div className="revenue-container">
      <h2>Monthly Revenue</h2>
      <button onClick={() => navigate("/")} className="btnBec-scss">
        Back to About Mi
      </button>
      <div className="chart-section">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="table-section">
        <table className="revenue-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {monthlyRevenue.map((data, index) => (
              <tr key={index}>
                <td>{data.month}</td>
                <td>${data.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Revenue;
