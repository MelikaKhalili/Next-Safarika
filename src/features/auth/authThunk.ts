import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../api/userApi";

export const fetchAdminUser = createAsyncThunk(
  "auth/fetchAdminUser",
  async (_, thunkAPI) => {
    try {
      const users = await getUsers();
      const admin = users.find(
        (user: { role: string }) => user.role === "ADMIN"
      );
      return admin || null;
    } catch (err: any) {
      return thunkAPI.rejectWithValue("خطا در گرفتن اطلاعات ادمین");
    }
  }
);
