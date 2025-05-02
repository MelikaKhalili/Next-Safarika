export interface Product {
  id: string;
  TourName: string;
  Price: string | number;
  Image: string[];
  Quantity: string | number;
  [key: string]: any;
}

export interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface UpdateProductPayload {
  id: string;
  price?: number;
  quantity?: number;
}

export interface ProductResponse {
  id: string;
  TourName: string;
  Price: number;
  Image: string[];
  Quantity: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFormData {
  TourName: string;
  Price: number;
  Image: File[];
  Quantity: number;
}
