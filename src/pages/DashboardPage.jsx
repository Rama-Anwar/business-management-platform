import React from 'react';

const DashboardPage = () => {
  // Sample metrics data
  const metrics = {
    users: 156,
    orders: 243,
    products: 20,
    totalSales: 45280
  };

  const MetricCard = ({ title, value, link, prefix = '' }) => (
    <a 
      href={link}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">{title}</h3>
        <p className="text-3xl font-bold text-gray-800">
          {prefix}{typeof value === 'number' ? value.toLocaleString() : value}
        </p>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Users"
            value={metrics.users}
            link="/users"
          />
          
          <MetricCard
            title="Total Orders"
            value={metrics.orders}
            link="/orders"
          />
          
          <MetricCard
            title="Total Products"
            value={metrics.products}
            link="/products"
          />
          
          <MetricCard
            title="Total Sales"
            value={metrics.totalSales}
            prefix="$"
            link="/sales"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;