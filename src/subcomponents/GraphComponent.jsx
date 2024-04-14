import DonutChart from './DonutChart.jsx';
import React from 'react';

const GraphComponent = ({label, chartData}) => {
  // Calculate dynamic margin based on the number of items
  const dynamicMargin = chartData.length > 5 ? 'my-1' : 'my-2';

  return (
    // Add `border` and `border-gray-300` classes for borders
    <div className="w-[515px] h-[348px] bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center"> {/* Optional: added shadow for depth */}
      {/* Title */}
      <div className="text-xl font-bold mb-4 self-start">{label}</div>

      {/* Legend and Chart in a row */}
      <div className="flex items-start justify-center w-full mt-6">
        {/* Legend with fixed height, scrollable, and centered content */}
        <div className="mr-4" style={{ height: '214px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="flex flex-col justify-center overflow-y-auto">
            {chartData.map((data, index) => (
              <div key={index} className={`flex items-center ${dynamicMargin}`}>
                <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: data.color }} />
                <span className="text-sm whitespace-nowrap">{data.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="flex-grow" style={{ height: '214px' }}>
          <DonutChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

export default GraphComponent;
