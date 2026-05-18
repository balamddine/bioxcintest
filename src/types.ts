export interface Product {
  id: string;
  name: string;
  category: 'Hair Care' | 'Skin Care' | 'Supplement';
  subCategory?: string;
  description: string;
  ingredients: string[];
  howToUse: string;
  size: string;
  price: number;
  image: string;
  isPopular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
