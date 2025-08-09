import React from 'react';
import { CartIcon } from '../common/CartIcon';

interface HeaderProps {
  cartItemCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-900">E-Commerce Store</h1>
          <CartIcon itemCount={cartItemCount} />
        </div>
      </div>
    </header>
  );
};