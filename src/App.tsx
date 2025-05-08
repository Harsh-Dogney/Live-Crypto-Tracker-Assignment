import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectAllCryptos, fetchCryptoData } from './features/crypto/cryptoSlice';
import { formatMarketCap } from './utils/formatters';
import Layout from './components/Layout';
import CryptoTable from './components/CryptoTable';
import StatCard from './components/StatCard';

function App() {
  const dispatch = useAppDispatch();
  const cryptos = useAppSelector(selectAllCryptos);
  const status = useAppSelector(state => state.crypto.status);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCryptoData());
    }
    
    const interval = setInterval(() => {
      dispatch(fetchCryptoData());
    }, 30000); // Refresh every 30 seconds
    
    return () => clearInterval(interval);
  }, [dispatch, status]);
  
  // Calculate market stats
  const totalMarketCap = cryptos.reduce((sum, crypto) => sum + crypto.marketCap, 0);
  const totalVolume24h = cryptos.reduce((sum, crypto) => sum + crypto.volume24h, 0);
  const btcDominance = cryptos.find(c => c.id === 'bitcoin')?.marketCap || 0;
  const btcDominancePercent = (btcDominance / totalMarketCap * 100).toFixed(1) + '%';
  
  // Calculate average market change
  const avgChange24h = cryptos.reduce((sum, crypto) => sum + crypto.priceChange24h, 0) / cryptos.length;
  const isMarketPositive = avgChange24h >= 0;
  const marketChangeText = (avgChange24h >= 0 ? '+' : '') + avgChange24h.toFixed(2) + '%';

  if (status === 'loading' && cryptos.length === 0) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Today's Cryptocurrency Prices</h2>
        <p className="text-slate-400 mb-6">
          The global crypto market cap is {formatMarketCap(totalMarketCap)}, with a {' '}
          <span className={isMarketPositive ? 'text-green-500' : 'text-red-500'}>
            {marketChangeText}
          </span> change in the last 24 hours.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard 
            title="Cryptocurrencies" 
            value={cryptos.length.toString()}
            hasInfo 
          />
          <StatCard 
            title="24h Trading Volume" 
            value={formatMarketCap(totalVolume24h)} 
            change={marketChangeText}
            isPositive={isMarketPositive}
            hasInfo
          />
          <StatCard 
            title="Bitcoin Dominance" 
            value={btcDominancePercent}
            hasInfo 
          />
        </div>
      </div>
      
      <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-lg font-medium">Top Cryptocurrencies by Market Cap</h3>
          <div className="flex items-center">
            <select className="bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 text-sm">
              <option>All Assets</option>
              <option>Favorites</option>
            </select>
          </div>
        </div>
        <CryptoTable />
      </div>
    </Layout>
  );
}

export default App;