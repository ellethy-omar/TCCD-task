import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface CartIconProps {
  itemCount: number;
}

export const CartIcon: React.FC<CartIconProps> = ({ itemCount }) => {
  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      {itemCount > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        >
          {itemCount > 99 ? '99+' : itemCount}
        </motion.div>
      )}
    </div>
  );
};