import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShoppingCart } from 'lucide-react';
import type { Product } from '../../types/product';
import { Button } from '../common/Button';
import { formatPrice, truncateText } from '../../utils/helpers';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">
          ⭐ {product.rating.rate}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 break-words">
          {truncateText(product.title, 50)}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2 capitalize">
          {product.category}
        </p>
        
        <p className="text-gray-700 text-sm mb-3">
          {truncateText(product.description, 100)}
        </p>
        
        <div className="text-2xl font-bold text-primary-600 mb-4">
          {formatPrice(product.price)}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onAddToCart(product)}
            className="flex-1 flex items-center justify-center space-x-1 min-w-0"
          >
            <ShoppingCart className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Add to Cart</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(product)}
            className="flex items-center justify-center px-3 flex-shrink-0"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
    // Life is beautiful if you eat spaghetti not write it.
  );
};