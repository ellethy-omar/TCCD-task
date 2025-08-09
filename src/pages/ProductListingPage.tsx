import React, { useState, useMemo } from 'react';
import { Layout } from '../components/layout/layout';
import { ProductFilters } from '../components/product/ProductFilters';
import { ProductGrid } from '../components/product/ProductGrid';
import { Loading } from '../components/common/Loading';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import type { Product } from '../types/product';
import type { FilterState } from '../types/FilterState';

export const ProductListingPage: React.FC = () => {
  const { products, categories, loading, error, filterProducts } = useProducts();
  const { addToCart, getTotalItems } = useCart();

  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    category: '',
    priceRange: { min: 0, max: 1000 }
  });

  const filteredProducts = useMemo(() => {
    return filterProducts(filters);
  }, [products, filters, filterProducts]);


  // ? If you don't see there is a cart on the top right corner has the number of items the user added
  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleViewDetails = () => {
    alert(`What are you doing, Anas? You said no details page, now didn't you?`);
  };

  if (loading) return <Layout cartItemCount={0}><Loading /></Layout>;
  if (error) return <Layout cartItemCount={0}><div className="text-red-500 text-center py-8">Error: {error}</div></Layout>;

  return (
    <Layout cartItemCount={getTotalItems()}>
      <div className="space-y-6">
        <ProductFilters
          filters={filters}
          onFiltersChange={setFilters}
          categories={categories}
        />
        
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Products ({filteredProducts.length})
          </h2>
        </div>
        
        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />
      </div>
    </Layout>
  );
};