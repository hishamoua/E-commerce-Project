import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const DashboardCard = ({ title, value, percentage}) => {

    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 500 },
      ];

  return (
    <div className="card dashboard-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h2 className="card-value">{value}</h2>
        <div className="chart-container">
          <LineChart width={250} height={100} data={data}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <p className="card-percentage">
          <span className={`value ${percentage >= 0 ? 'positive' : 'negative'}`}>
            {percentage >= 0 ? `↑ ${percentage}%` : `↓ ${Math.abs(percentage)}%`} vs last month
          </span>
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
