import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
        {children}
      </main>
      <footer className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 text-center text-slate-400 text-sm">
        <p>© 2025 CryptoTracker. All data is simulated for demonstration purposes.</p>
      </footer>
    </div>
  );
};

export default Layout;