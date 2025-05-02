import {
  getOrders,
  updateOrderPrice,
  updateOrderQuantity,
} from "@/api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Order {
  id: string;
  customer_name: string;
  Price: number;
  Quantity: string | number;
  status: string;
  createdAt: string;
  deliveryDate: string;
}

interface OrdersState {
  items: Order[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrdersState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, thunkAPI) => {
    try {
      const orders = await getOrders();
      return orders;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "خطا در دریافت سفارشات");
    }
  }
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async (
    { id, price, quantity }: { id: string; price?: number; quantity?: number },
    thunkAPI
  ) => {
    try {
      if (price !== undefined) {
        const updatedOrder = await updateOrderPrice(id, price);
        return { id, price, updatedOrder };
      }
      if (quantity !== undefined) {
        const updatedOrder = await updateOrderQuantity(id, quantity);
        return { id, quantity, updatedOrder };
      }
      return { id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "خطا در بروزرسانی سفارش"
      );
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        const { id, price, quantity } = action.payload;
        state.items = state.items.map((order) => {
          if (order.id === id) {
            return {
              ...order,
              ...(price !== undefined && { Price: price }),
              ...(quantity !== undefined && { Quantity: quantity }),
            };
          }
          return order;
        });
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default ordersSlice.reducer;
