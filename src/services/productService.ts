import axios from 'axios';
import type { Product } from '../types/product';

const BASE_URL = 'https://fakestoreapi.com';

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products');
    }
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response = await axios.get(`${BASE_URL}/products/category/${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw new Error('Failed to fetch products by category');
    }
  },

  async getCategories(): Promise<string[]> {
    try {
      const response = await axios.get(`${BASE_URL}/products/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories');
    }
  }
};