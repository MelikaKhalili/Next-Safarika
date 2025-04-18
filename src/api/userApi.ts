"use client";
import { BASE_URL } from "@/constant/config";
import axios from "axios";
export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data.data.users;
};
export const registerUser = async (userData: any) => {
  const response = await axios.post(`${BASE_URL}/auth/signup`, userData);
  return response.data;
};
export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  console.log(response);
  return response.data.data.products;
};
export const getOrders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/orders`);
    console.log("Orders:", response.data.data.orders);
    return response.data.data.orders;
  } catch (error) {
    console.log("Error in getOrders:", error);
    throw error;
  }
};
