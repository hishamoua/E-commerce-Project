import React from 'react';
import { AreaChart, Area,  Tooltip, ResponsiveContainer } from 'recharts';


const DashboardCard = ({ title, value, percentage}) => {

    const data = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 30 },
    { name: 'Mar', value: 50 },
  ];

  return (
    <div className="dashboard-card">
      <div className="card-body">
        
        <h2 className="card-title">{title}</h2>
        <h2 className="card-value">{value}</h2>
        
        </div>

        <div className="chart-container" style={{ width: '100%', height: '100px' }}>
       
          <ResponsiveContainer>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={0.6} fill="url(#colorValue)" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
          <p className="card-percentage">
          <span className={`value ${percentage >= 0 ? 'positive' : 'negative'}`}>
            {percentage >= 0 ? `↑ ` : `↓`}</span>
            <span className='last'>{percentage}% vs last month</span>
        </p>
      </div>
        
    </div>
  );
};

export default DashboardCard;
