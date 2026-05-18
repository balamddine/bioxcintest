export interface Product {
  id: string;
  name: string;
  category: 'Hair Care' | 'Skin Care' | 'Supplement';
  subCategory?: string;
  summary?: string;
  description: string;
  ingredients: string[];
  howToUse: string;
  size: string;
  image: string;
  productUrl?: string;
  isPopular?: boolean;
  homeFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
