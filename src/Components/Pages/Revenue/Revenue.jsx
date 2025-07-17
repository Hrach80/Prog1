import React from "react";
import { Line } from "react-chartjs-2";
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
    // Գույնը datasets-ի համար սահմանվում է ներքևում, այստեղ այն ազդեցություն չունի
    labels: monthlyRevenue.map((data) => data.month),
    datasets: [
      {
        label: "Monthly Revenue",
        data: monthlyRevenue.map((data) => data.amount),
        borderColor: "rgba(17, 182, 182, 1)",
        // backgroundColor-ը կարող է մնալ կապույտի երանգ, եթե ցանկանում եք լցոնված տարածք
        backgroundColor: "rgba(17, 182, 182, 0.2)",
        fill: true,
        tension: 0.1,
        pointBorderColor: "white", // Կետերի եզրագծի գույնը
        pointBackgroundColor: "white", // Կետերի ներքին գույնը
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    // general color for all text elements unless overridden
    color: "white", // Սահմանում է ընդհանուր գույնը
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white", // Լեգենդի տեքստի գույնը
        },
      },
      title: {
        display: true,
        text: "Monthly Revenue Dynamics",
        color: "white", // Վերնագրի տեքստի գույնը
      },
      tooltip: {
        titleColor: "white", // Թուլթիփի վերնագրի գույնը
        bodyColor: "white", // Թուլթիփի բովանդակության գույնը
        borderColor: "white", // Թուլթիփի եզրագծի գույնը
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Թուլթիփի ֆոնի գույնը
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Ցանցի գծերի գույնը
        },
        ticks: {
          color: "white", // Y առանցքի թվերի գույնը
        },
        title: {
          display: true,
          text: "Revenue ($)",
          color: "white", // Y առանցքի վերնագրի գույնը
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Ցանցի գծերի գույնը
        },
        ticks: {
          color: "white", // X առանցքի թվերի/անունների գույնը
        },
        title: {
          display: true,
          text: "Month",
          color: "white", // X առանցքի վերնագրի գույնը
        },
      },
    },
  };

  return (
    <div className="revenue-container">
      {/* Այս h2-ը կփոխվի CSS-ով */}
      <h2>Monthly Revenue</h2>

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
