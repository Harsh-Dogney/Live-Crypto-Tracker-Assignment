import React from 'react';
import { Search, Moon, Bell, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 sticky top-0 z-10 border-b border-slate-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white mr-8">CryptoTracker</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">Cryptocurrencies</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Exchanges</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">NFTs</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Portfolio</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-slate-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 lg:w-64"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            </div>
            
            <button className="p-2 rounded-full hover:bg-slate-800 transition-colors">
              <Moon size={20} className="text-slate-400" />
            </button>
            
            <button className="p-2 rounded-full hover:bg-slate-800 transition-colors relative">
              <Bell size={20} className="text-slate-400" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full"></span>
            </button>
            
            <button className="md:hidden p-2 rounded-full hover:bg-slate-800 transition-colors">
              <Menu size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;