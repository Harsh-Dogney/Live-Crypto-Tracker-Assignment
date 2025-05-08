import React, { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { formatPercent } from '../utils/formatters';

interface PriceChangeProps {
  value: number;
}

const PriceChange: React.FC<PriceChangeProps> = ({ value }) => {
  const [animateChange, setAnimateChange] = useState(false);
  
  useEffect(() => {
    setAnimateChange(true);
    const timer = setTimeout(() => setAnimateChange(false), 1000);
    return () => clearTimeout(timer);
  }, [value]);
  
  const isPositive = value > 0;
  const isNegative = value < 0;
  const isNeutral = value === 0;
  
  const textColorClass = isPositive 
    ? 'text-green-500' 
    : isNegative 
      ? 'text-red-500' 
      : 'text-gray-400';
      
  const bgColorClass = isPositive 
    ? 'bg-green-500/10' 
    : isNegative 
      ? 'bg-red-500/10' 
      : 'bg-gray-500/10';
      
  const animationClass = animateChange 
    ? isPositive 
      ? 'animate-pulse-green' 
      : isNegative 
        ? 'animate-pulse-red' 
        : '' 
    : '';

  return (
    <div className={`flex items-center justify-center px-2 py-1 rounded ${bgColorClass} ${animationClass} transition-all duration-300`}>
      <div className="flex items-center">
        {isPositive && <ChevronUp size={14} className="text-green-500" />}
        {isNegative && <ChevronDown size={14} className="text-red-500" />}
        <span className={`ml-0.5 ${textColorClass} font-medium`}>
          {formatPercent(value)}
        </span>
      </div>
    </div>
  );
};

export default PriceChange;