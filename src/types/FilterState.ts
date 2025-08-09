export interface FilterState {
  searchTerm: string;
  category: string;
  priceRange: {
    min: number;
    max: number;
  };
}