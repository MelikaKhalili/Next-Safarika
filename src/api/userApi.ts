"use client";
import { API_KEY, BASE_URL, headers } from "@/constant/config";
import axios from "axios";
export const login = async (email, password) => {
  const response = await axios.post(
    `${BASE_URL}/api/users/login`,
    {
      email,
      password,
    },
    {
      headers: headers,
    }
  );
  return response.data;
};
export const getUser = async (accessTocken) => {
  const response = await axios.get(`${BASE_URL}/api/users/me`, {
    headers: {
      api_key: API_KEY,
      Authorization: `Bearer ${accessTocken}`,
    },
  });
  return response.data;
};
export const registerUser = async (userData: any) => {
  const response = await axios.post(
    `${BASE_URL}/api/users/register`,
    userData,
    {
      headers: headers,
    }
  );
  return response.data;
};
export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/api/records/tours`, {
    headers: headers,
  });
  console.log(response);
  return response.data.records;
};
export const getOrders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/records/orders`, {
      headers: headers,
    });
    console.log("Orders:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error in getOrders:", error);
    throw error;
  }
};
