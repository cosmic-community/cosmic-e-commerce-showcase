// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    description?: string;
    price: number;
    product_images?: ProductImage[];
    stock_quantity?: number;
    in_stock?: boolean;
    collections?: Collection[] | string[];
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    description?: string;
    collection_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    product?: Product;
    rating: {
      key: string;
      value: string;
    };
    customer_name: string;
    review_text: string;
    verified_purchase?: boolean;
  };
}

// Product image interface
export interface ProductImage {
  url: string;
  imgix_url: string;
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guard functions
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isCollection(obj: CosmicObject): obj is Collection {
  return obj.type === 'collections';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}

// Rating type literal
export type Rating = '1' | '2' | '3' | '4' | '5';