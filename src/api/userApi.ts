"use client";
import { API_KEY, BASE_URL, headers } from "@/constant/config";
import axios from "axios";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/login`,
      { email, password },
      {
        headers: headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const getUser = async (accessToken: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Get user error:", error);
    throw error;
  }
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
    console.log("Full Orders Response:", response.data);
    console.log("Orders Records:", response.data.records);
    return response.data.records;
  } catch (error) {
    console.log("Error in getOrders:", error);
    throw error;
  }
};

//Fetch Delete
export const deleteProductById = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/api/records/tours/${id}`, {
    headers: headers,
  });
  console.log("URL:", `${BASE_URL}/api/records/tours/${id}`);
  console.log(id);
  return response.data;
};

//Fetch Edit
export const editProductById = async (id: string, updatedData: any) => {
  const response = await axios.put(
    `${BASE_URL}/api/records/tours/${id}`,
    updatedData,
    {
      headers: headers,
    }
  );
  return response.data;
};

export const updateProductPrice = async (id: string, price: number) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/records/tours/${id}`,
      { Price: price },
      {
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.Price === price) {
      return response.data;
    } else {
      throw new Error("Failed to update price");
    }
  } catch (error) {
    console.error("Error updating product price:", error);
    throw error;
  }
};

export const updateOrderPrice = async (id: string, price: number) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/records/orders/${id}`,
      { Price: price },
      {
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.Price === price) {
      return response.data;
    } else {
      throw new Error("Failed to update price");
    }
  } catch (error) {
    console.error("Error updating order price:", error);
    throw error;
  }
};

export const updateProductQuantity = async (id: string, quantity: number) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/records/tours/${id}`,
      { Quantity: quantity },
      {
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.Quantity === quantity) {
      return response.data;
    } else {
      throw new Error("Failed to update quantity");
    }
  } catch (error) {
    console.error("Error updating product quantity:", error);
    throw error;
  }
};

export const updateOrderQuantity = async (id: string, quantity: number) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/records/orders/${id}`,
      { Quantity: quantity },
      {
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.Quantity === quantity) {
      return response.data;
    } else {
      throw new Error("Failed to update quantity");
    }
  } catch (error) {
    console.error("Error updating order quantity:", error);
    throw error;
  }
};
export const getTehrantours = async () => {
  const response = await axios.get(`${BASE_URL}/api/records/tehranTours`, {
    headers: headers,
  });
  console.log(response);
  return response.data.records;
};
export const getToptravelogues = async () => {
  const response = await axios.get(`${BASE_URL}/api/records/Toptravelogues`, {
    headers: headers,
  });
  return response.data.records;
};
export const getSortedTours = async (
  filterKey: any,
  filterValue: any,
  sortBy: any,
  order: any
) => {
  const response = await axios.get(
    `${BASE_URL}/api/records/tours?filterKey=${filterKey}&filterValue=${filterValue}&order=${order}&sortBy=${sortBy}`,
    {
      headers: headers,
    }
  );
  console.log(response.data.records);
  return response.data.records;
};

export const searchToursByTitle = async (searchValue: any) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/records/tours?searchKey=Destination&searchValue=${searchValue}`,
      {
        headers: headers,
      }
    );
    console.log(response.data.records);
    return response.data.records;
  } catch (error) {
    console.error(error);
  }
};
