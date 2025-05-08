import React from 'react';
import { Info, ArrowUp, ArrowDown } from 'lucide-react';
import { useAppSelector } from '../app/hooks';
import { selectAllCryptos } from '../features/crypto/cryptoSlice';
import CryptoRow from './CryptoRow';

const CryptoTable: React.FC = () => {
  const cryptos = useAppSelector(selectAllCryptos);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[1200px] text-sm">
        <thead>
          <tr className="text-left text-slate-400 border-b border-slate-800">
            <th className="py-3 pl-4 pr-2"></th>
            <th className="py-3 px-2 text-center">#</th>
            <th className="py-3 px-2">Name</th>
            <th className="py-3 px-4 text-right">Price</th>
            <th className="py-3 px-2">
              <div className="flex items-center">
                <span>1h %</span>
                <button className="ml-1 text-slate-500 hover:text-white transition-colors">
                  <ArrowUp size={12} />
                </button>
              </div>
            </th>
            <th className="py-3 px-2">
              <div className="flex items-center">
                <span>24h %</span>
                <button className="ml-1 text-slate-500 hover:text-white transition-colors">
                  <ArrowDown size={12} />
                </button>
              </div>
            </th>
            <th className="py-3 px-2">
              <div className="flex items-center">
                <span>7d %</span>
                <button className="ml-1 text-slate-500 hover:text-white transition-colors">
                  <ArrowUp size={12} />
                </button>
              </div>
            </th>
            <th className="py-3 px-4 text-right">
              <div className="flex items-center justify-end">
                <span>Market Cap</span>
                <button className="ml-1 text-slate-500 hover:text-white transition-colors">
                  <Info size={14} />
                </button>
              </div>
            </th>
            <th className="py-3 px-4 text-right">
              <div className="flex items-center justify-end">
                <span>Volume(24h)</span>
                <button className="ml-1 text-slate-500 hover:text-white transition-colors">
                  <Info size={14} />
                </button>
              </div>
            </th>
            <th className="py-3 px-4 text-right">
              <div className="flex items-center justify-end">
                <span>Circulating Supply</span>
                <button className="ml-1 text-slate-500 hover:text-white transition-colors">
                  <Info size={14} />
                </button>
              </div>
            </th>
            <th className="py-3 px-4 text-right">
              <span>Max Supply</span>
            </th>
            <th className="py-3 px-4">
              <span>Last 7 Days</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map(crypto => (
            <CryptoRow key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;