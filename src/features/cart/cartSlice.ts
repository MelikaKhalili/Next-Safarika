import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  TourName: string;
  Price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalprice: number;
}

const initialState: CartState = {
  items: [],
  totalprice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalprice = state.items.reduce(
        (total, item) => total + item.quantity * item.Price,
        0
      );
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; Quantity: number }>
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.Quantity = action.payload.Quantity;
    },
    clearCart: (state) => {
      state.items = [];
    },
    calculateTotalPrice: (state) => {
      state.totalprice = state.items.reduce(
        (acc, item) => acc + item.Price * item.quantity,
        0
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalprice = state.items.reduce(
          (acc, item) => acc + item.Price * item.quantity,
          0
        );
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalprice = state.items.reduce(
          (acc, item) => acc + item.Price * item.quantity,
          0
        );
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  calculateTotalPrice,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
