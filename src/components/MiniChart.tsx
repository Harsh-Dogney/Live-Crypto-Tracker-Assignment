import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface MiniChartProps {
  data: number[];
  isPositive: boolean;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, isPositive }) => {
  const chartData = data.map((value, index) => ({ value }));
  const color = isPositive ? '#00C087' : '#FF3B30';

  return (
    <div className="w-24 h-12">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.1}
            strokeWidth={1.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;