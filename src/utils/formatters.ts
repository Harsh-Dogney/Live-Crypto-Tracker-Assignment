export const formatPrice = (price: number): string => {
  if (price >= 1) {
    return `$${price.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })}`;
  }
  
  // For very small prices, show more decimal places
  return `$${price.toLocaleString('en-US', { 
    minimumFractionDigits: 4, 
    maximumFractionDigits: 6 
  })}`;
};

export const formatPercent = (percent: number): string => {
  return percent.toLocaleString('en-US', { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'always'
  }) + '%';
};

export const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1000000000000) {
    return `$${(marketCap / 1000000000000).toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })}T`;
  }
  
  if (marketCap >= 1000000000) {
    return `$${(marketCap / 1000000000).toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })}B`;
  }
  
  return `$${(marketCap / 1000000).toLocaleString('en-US', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })}M`;
};

export const formatSupply = (supply: number, symbol: string): string => {
  if (supply >= 1000000) {
    return `${(supply).toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })}M ${symbol}`;
  }
  
  return `${supply.toLocaleString('en-US', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })} ${symbol}`;
};