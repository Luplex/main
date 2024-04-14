import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DonutChart = ({ chartData = [] }) => { // Default value set to an empty array
  const data = {
    labels: chartData.map(data => data.label),
    datasets: [{
      data: chartData.map(data => data.value),
      backgroundColor: chartData.map(data => data.color),
      borderWidth: 0,
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      }
    },
    maintainAspectRatio: false, // Add this to maintain aspect ratio if needed
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
