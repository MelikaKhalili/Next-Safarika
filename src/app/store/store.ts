import authReducer from "@/features/auth/authSlice";
import cartReducer from "@/features/cart/cartSlice";
import formReducer from "@/features/form/formSlice";
import ordersSlice from "@/features/orders/ordersSlice";
import productsSlice from "@/features/products/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    products: productsSlice,
    orders: ordersSlice,
    form: formReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Define the root state type
interface RootState {
  auth: {
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
  };
  form: {
    name: string;
    address: string;
    phone: string;
  };
  products: any; // Replace with actual products state type
  orders: any; // Replace with actual orders state type
}

export type AppDispatch = typeof store.dispatch;
