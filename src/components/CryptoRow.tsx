import React from 'react';
import { Star } from 'lucide-react';
import { Crypto } from '../types';
import { formatPrice, formatMarketCap, formatSupply } from '../utils/formatters';
import PriceChange from './PriceChange';
import MiniChart from './MiniChart';
import { useAppDispatch } from '../app/hooks';
import { toggleFavorite } from '../features/crypto/cryptoSlice';

interface CryptoRowProps {
  crypto: Crypto;
}

const CryptoRow: React.FC<CryptoRowProps> = ({ crypto }) => {
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(crypto.id));
  };

  return (
    <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
      <td className="py-4 pl-4 pr-2">
        <button 
          onClick={handleFavoriteClick}
          className="p-1 rounded-full hover:bg-slate-700 transition-colors"
        >
          <Star 
            size={16} 
            className={crypto.favorite ? "text-yellow-400 fill-yellow-400" : "text-slate-500"} 
          />
        </button>
      </td>
      <td className="py-4 px-2 text-center text-slate-400">
        {crypto.rank}
      </td>
      <td className="py-4 px-2">
        <div className="flex items-center">
          <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
          <div className="ml-3">
            <p className="font-medium text-white">{crypto.name}</p>
            <p className="text-sm text-slate-400">{crypto.symbol}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 text-right font-semibold text-white">
        {formatPrice(crypto.price)}
      </td>
      <td className="py-4 px-2">
        <PriceChange value={crypto.priceChange1h} />
      </td>
      <td className="py-4 px-2">
        <PriceChange value={crypto.priceChange24h} />
      </td>
      <td className="py-4 px-2">
        <PriceChange value={crypto.priceChange7d} />
      </td>
      <td className="py-4 px-4 text-right text-slate-200">
        {formatMarketCap(crypto.marketCap)}
      </td>
      <td className="py-4 px-4 text-right text-slate-200">
        {formatMarketCap(crypto.volume24h)}
      </td>
      <td className="py-4 px-4 text-right text-slate-200">
        {formatSupply(crypto.circulatingSupply, crypto.symbol)}
      </td>
      <td className="py-4 px-4 text-right text-slate-200">
        {crypto.maxSupply ? formatSupply(crypto.maxSupply, crypto.symbol) : '∞'}
      </td>
      <td className="py-4 px-4">
        <MiniChart 
          data={crypto.sparkline} 
          isPositive={crypto.priceChange7d >= 0} 
        />
      </td>
    </tr>
  );
};

export default CryptoRow;