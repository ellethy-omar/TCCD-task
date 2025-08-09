import React from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  cartItemCount: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, cartItemCount }) => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header cartItemCount={cartItemCount} />
      {/* Bos main de ba7b gedan ast3melha reminds me of native development */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="w-full overflow-hidden">
          {children}
        </div>
      </main>
    </div>
  );
};