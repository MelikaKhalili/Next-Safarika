import { headers } from "@/constant/config";
import axios from "axios";
import { Product, ProductFormData, ProductResponse } from "./types";

const BASE_URL = "http://api.alikooshesh.ir:3000";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/records/tours`, {
      headers: headers,
    });
    return response.data.records;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const createProduct = async (
  data: ProductFormData
): Promise<ProductResponse> => {
  try {
    const formData = new FormData();
    formData.append("TourName", data.TourName);
    formData.append("Price", data.Price.toString());
    formData.append("Quantity", data.Quantity.toString());
    data.Image.forEach((file) => formData.append("Image", file));

    const response = await axios.post(`${BASE_URL}/products`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProductPrice = async (
  id: string,
  price: number
): Promise<ProductResponse> => {
  try {
    const response = await axios.put(`${BASE_URL}/products/${id}/price`, {
      price,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating product price:", error);
    throw error;
  }
};

export const deleteProductById = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/products/${id}`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
