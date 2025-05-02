import { BASE_URL } from "@/constant/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: any, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, userData);
      const user = response.data?.user;
      const token = response.data?.token?.accessToken;

      if (token) {
        localStorage.setItem("token", token);
      }

      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("ثبت‌نام ناموفق بود");
    }
  }
);
