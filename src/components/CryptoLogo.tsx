import React from 'react';
import { Bitcoin, Feather as Ethereum, DollarSign, Coins, Gem, Disc } from 'lucide-react';

interface CryptoLogoProps {
  cryptoId: string;
  size?: number;
}

const CryptoLogo: React.FC<CryptoLogoProps> = ({ cryptoId, size = 24 }) => {
  const getLogoComponent = () => {
    switch (cryptoId) {
      case 'bitcoin':
        return <Bitcoin size={size} className="text-amber-500" />;
      case 'ethereum':
        return <Ethereum size={size} className="text-indigo-400" />;
      case 'tether':
        return <DollarSign size={size} className="text-teal-500" />;
      case 'xrp':
        return <Coins size={size} className="text-blue-500" />;
      case 'bnb':
        return <Gem size={size} className="text-yellow-500" />;
      case 'solana':
        return <Disc size={size} className="text-purple-500" />;
      default:
        return <Coins size={size} className="text-gray-400" />;
    }
  };

  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800">
      {getLogoComponent()}
    </div>
  );
};

export default CryptoLogo;