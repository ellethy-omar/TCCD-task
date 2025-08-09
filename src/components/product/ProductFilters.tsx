import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '../common/Input';
import type { FilterState } from '../../types/FilterState';
import { capitalizeFirstLetter } from '../../utils/helpers';

interface ProductFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  categories: string[];
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFiltersChange,
  categories
}) => {
  const handleSearchChange = (searchTerm: string) => {
    onFiltersChange({ ...filters, searchTerm });
  };

  const handleCategoryChange = (category: string) => {
    onFiltersChange({ ...filters, category });
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseFloat(value) || 0;
    onFiltersChange({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        [type]: numValue
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md mb-8"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Filters</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Products
          </label>
          <Input
            placeholder="Search by name..."
            value={filters.searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {capitalizeFirstLetter(category)}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min Price
          </label>
          <Input
            type="number"
            placeholder="0"
            value={filters.priceRange.min.toString()}
            onChange={(value) => handlePriceChange('min', value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Price
          </label>
          <Input
            type="number"
            placeholder="1000"
            value={filters.priceRange.max.toString()}
            onChange={(value) => handlePriceChange('max', value)}
          />
        </div>
      </div>
    </motion.div>
  );
};
