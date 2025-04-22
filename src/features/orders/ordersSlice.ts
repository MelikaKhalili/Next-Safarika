import { getOrders } from "@/api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  try {
    const response = await getOrders();
    return response.records;
  } catch (error: any) {
    console.log("خطا در دریافت محصولات");
  }
});

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        console.log("Fetched Orders:", action.payload);
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        console.log("Error in fetchOrders:", action.payload);
      });
  },
});

export default ordersSlice.reducer;
