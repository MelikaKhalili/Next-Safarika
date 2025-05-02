import {
  deleteProductById as deleteProductApi,
  getProducts,
  updateProductPrice,
  updateProductQuantity,
} from "@/api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  TourName: string;
  Price: number;
  Image: string[];
  Quantity: number;
  [key: string]: any;
}

interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const products = await getProducts();
      if (!products || !Array.isArray(products)) {
        throw new Error("Invalid response format from server");
      }
      return products;
    } catch (error: any) {
      console.error("Error fetching products:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "خطا در دریافت محصولات"
      );
    }
  }
);

interface UpdateProductPayload {
  id: string;
  price?: number;
  quantity?: number;
}

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, price, quantity }: UpdateProductPayload, thunkAPI) => {
    try {
      if (price !== undefined) {
        const updatedProduct = await updateProductPrice(id, price);
        return { id, price, updatedProduct };
      }
      if (quantity !== undefined) {
        const updatedProduct = await updateProductQuantity(id, quantity);
        return { id, quantity, updatedProduct };
      }
      return { id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "خطا در بروزرسانی");
    }
  }
);

export const deleteProductById = createAsyncThunk(
  "products/deleteProduct",
  async (id: string, thunkAPI) => {
    try {
      await deleteProductApi(id);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "خطا در حذف محصول");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const { id, price, quantity } = action.payload;
        const productIndex = state.items.findIndex((item) => item.id === id);
        if (productIndex !== -1) {
          state.items = state.items.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                ...(price !== undefined && { Price: price }),
                ...(quantity !== undefined && { Quantity: quantity }),
              };
            }
            return item;
          });
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
export { deleteProductById };
