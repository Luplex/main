import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChartComponent = ({ dataScores, labels }) => {
  let gradient;

  const getGradient = (ctx, chartArea) => {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || gradient.width !== chartWidth || gradient.height !== chartHeight) {
      gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      gradient.addColorStop(1, 'rgba(255, 0, 0, 1)'); // Rouge
      gradient.addColorStop(0.5, 'rgba(255, 215, 0, 1)'); // Jaune
      gradient.addColorStop(0, 'rgba(0, 128, 0, 1)'); // Vert
    }
    return gradient;
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Score global',
        data: dataScores,
        fill: false,
        borderColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        tension: 0,
        pointRadius: 0,
        borderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Définissez la quantité de pas d'échelle sur l'axe des Y
          stepSize: 25, // Ajustez cette valeur selon vos besoins
        },
        grid: {
          display: true,
          color: "#E5E5E5",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChartComponent;
