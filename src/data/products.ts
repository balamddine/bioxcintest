import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'hair-classic-shampoo',
    name: 'Bioxcin Classic Herbal Shampoo',
    category: 'Hair Care',
    subCategory: 'Classic',
    description: 'Bioxcin Herbal Shampoo is an ideal product for those experiencing hair loss issues or want to protect the health of their hair. This shampoo contains BioComplex B11 that strengthens hair roots, nourishes the scalp, and ensures hair looks healthy and shiny.',
    ingredients: ['BioComplex B11', 'Honey', 'Liposomal actives'],
    howToUse: 'Apply to wet hair with a massage, keep it for 1-2 minutes and rinse well.',
    size: '300 ml',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'hair-forte-shampoo',
    name: 'Bioxcin Forte Shampoo',
    category: 'Hair Care',
    subCategory: 'Forte Series',
    description: 'Specially developed for intensive hair loss. Contains concentrated BioComplex B11 and Procyanidin. Enriched with liposome technology to penetrate hair roots more effectively.',
    ingredients: ['Concentrated BioComplex B11', 'Procyanidin', 'Honey', 'Liposomal actives'],
    howToUse: 'Apply to wet hair with a massage, keep it for 1-2 minutes and rinse well.',
    size: '300 ml',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1559535332-db9971090158?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'skin-acnium-gel',
    name: 'Acnium Sebum Regulating Cleansing Gel',
    category: 'Skin Care',
    subCategory: 'Acnium Series',
    description: 'Balances the skin’s excess sebum production and gently cleanses with its patented herbal complex, niacinamide, and panthenol-infused formula.',
    ingredients: ['Acnium Patented Herbal Complex', 'Niacinamide', 'Thermal Water', 'Panthenol'],
    howToUse: 'Dispense a small amount onto hands and lather. Apply to face using circular motions. Rinse with lukewarm water.',
    size: '500 ml',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'skin-gold-oil',
    name: 'Gold On Skin Dry Oil',
    category: 'Skin Care',
    subCategory: 'Gold On Skin',
    description: 'Moisturizes, nourishes, and adds radiance with miraculous flower oils. Radiant oil suitable for use on hair, skin, and face.',
    ingredients: ['Sunflower Oil', 'Jasmine Flower Oil', 'Magnolia Flower Oil', 'Honeysuckle Flower Oil', 'Vitamin E'],
    howToUse: 'Apply to body, face, and hair in adequate amount. Shake well before use.',
    size: '100 ml',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'supp-mens-hair',
    name: 'B’oxcin Men’s Hair Tablet',
    category: 'Supplement',
    description: 'Specifically developed for male consumers. Contains L-Arginine, Nettle Root Extract, Biotin, and Zinc. Features time-release technology.',
    ingredients: ['Hydrolyzed Keratin', 'L-Arginine', 'Biotin', 'Zinc', 'Vitamin C'],
    howToUse: 'As a dietary supplement for adults, take 1 tablet daily.',
    size: '30 tablets',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'hair-black-garlic',
    name: 'Black Garlic Shampoo',
    category: 'Hair Care',
    subCategory: 'Black Garlic',
    description: 'Contains 100% black garlic extract. Provides comprehensive hair care, strengthens roots, and supports healthier growth.',
    ingredients: ['100% Black Garlic Extract', 'BioComplex B11', 'Bio-Activ Peptides'],
    howToUse: 'Apply to wet hair with a massage, keep it for 1-2 minutes and rinse well.',
    size: '300 ml',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=800&auto=format&fit=crop'
  }
];
