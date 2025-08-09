import { useState, useEffect } from 'react';
import type { Product } from '../types/product';
import type { FilterState } from '../types/FilterState'
import { productService } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          productService.getAllProducts(),
          productService.getCategories()
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterProducts = (filters: FilterState): Product[] => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesPrice = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  };

  return { products, categories, loading, error, filterProducts };
};