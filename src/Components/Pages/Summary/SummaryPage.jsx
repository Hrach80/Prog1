import React from "react";
import "./SummaryPage.css";
import { useNavigate } from "react-router-dom";

const SummaryPage = () => {
  const navigate=useNavigate()
  return (
    <div className="summary-page-container">
      <h1>Summary Overview</h1>
      <button onClick={() => navigate("/")} className="btnBec-scss">
        Back to About Me
      </button>
      <div className="summary-grid">
        <div className="summary-card total-sales">
          <h2>Total Sales</h2>
          <p className="summary-value">$1,234,567</p>
          <p className="summary-detail">Up 15% from last month</p>
        </div>

        <div className="summary-card new-users">
          <h2>New Users</h2>
          <p className="summary-value">12,345</p>
          <p className="summary-detail">30% increase this quarter</p>
        </div>

        <div className="summary-card avg-revenue">
          <h2>Avg. Revenue per User</h2>
          <p className="summary-value">$55.20</p>
          <p className="summary-detail">Stable since last period</p>
        </div>

        <div className="summary-card pending-actions">
          <h2>Pending Actions</h2>
          <p className="summary-value">7</p>
          <p className="summary-detail">Review required</p>
        </div>
      </div>

      <div className="summary-content">
        <h2>Detailed Reports</h2>
        <p>
          Here you can integrate more detailed charts, graphs, or tables
          summarizing various aspects of your data. This section is a great
          place to embed interactive components or display key performance
          indicators (KPIs).
        </p>
        <ul>
          <li>Monthly Performance Analysis</li>
          <li>Customer Acquisition Trends</li>
          <li>Product Category Breakdown</li>
          <li>Financial Projections</li>
        </ul>
        <p>
          Consider adding dynamic content here that fetches data from an API and
          presents it in an easily digestible format.
        </p>
      </div>
    </div>
  );
};

export default SummaryPage;
