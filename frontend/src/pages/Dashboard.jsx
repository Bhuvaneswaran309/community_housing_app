import React from "react";
import "./Dashboard.css";
import { FaUsers, FaHome, FaMoneyBill, FaWrench } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dash-container">

      <h1 className="dash-title">🏘 Community Housing Dashboard</h1>
      <p className="dash-subtitle">Manage residents, rents, maintenance, and reports</p>

      <div className="dash-grid">

        <div className="dash-card">
          <FaUsers className="dash-icon" />
          <h3>Residents</h3>
          <p>View and manage all residents living in the community.</p>
        </div>

        <div className="dash-card">
          <FaHome className="dash-icon" />
          <h3>Housing Units</h3>
          <p>Track available, occupied, and maintenance-needed units.</p>
        </div>

        <div className="dash-card">
          <FaMoneyBill className="dash-icon" />
          <h3>Rent Payments</h3>
          <p>Monitor monthly rents, dues, and pending payments.</p>
        </div>

        <div className="dash-card">
          <FaWrench className="dash-icon" />
          <h3>Maintenance</h3>
          <p>View maintenance requests and technician updates.</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
