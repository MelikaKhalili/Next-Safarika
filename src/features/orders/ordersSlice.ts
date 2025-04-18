import { getOrders } from "@/api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk("Orders/fetchOrders", async () => {
  try {
    const orders = await getOrders();
    console.log("Fetched Products:", orders.data);
    return orders;
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
        console.log("Fetched Orders:", action.payload); // داده‌های دریافتی از API را چاپ کنید
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        console.log("Error in fetchOrders:", action.payload); // پیام خطا را چاپ کنید
      });
  },
});

export default ordersSlice.reducer;
