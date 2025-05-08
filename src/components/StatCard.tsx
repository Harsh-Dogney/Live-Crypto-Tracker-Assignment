import React from 'react';
import { Info } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  hasInfo?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  isPositive = true,
  hasInfo = false 
}) => {
  return (
    <div className="bg-slate-800 rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm text-slate-400 flex items-center">
          {title}
          {hasInfo && (
            <button className="ml-1 text-slate-500 hover:text-white transition-colors">
              <Info size={14} />
            </button>
          )}
        </h3>
      </div>
      <p className="text-xl font-semibold text-white">{value}</p>
      {change && (
        <p className={`text-sm mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </p>
      )}
    </div>
  );
};

export default StatCard;