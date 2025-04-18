"use client";
import { registerUser } from "@/features/auth/register/authThunk";
import { createSlice } from "@reduxjs/toolkit";
import { fetchAdminUser } from "./authThunk";
interface AuthState {
  currentUser: {
    firstname?: string;
    lastname?: string;
    username?: string;
    password?: string;
    phoneNumber?: string;
    address?: string;
    email?: string;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.error = null;
      localStorage.removeItem("token");
    },
    updateField: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        [action.payload.field]: action.payload.value,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchAdminUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, updateField } = authSlice.actions;
export default authSlice.reducer;
