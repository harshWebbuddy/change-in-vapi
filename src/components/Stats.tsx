import React from 'react';

const Stats = () => {
  const stats = [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '100+', label: 'Voice Options' },
    { value: '<50ms', label: 'Response Time' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;