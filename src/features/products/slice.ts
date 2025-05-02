import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProductById, getProducts, updateProductPrice } from "./api";
import { ProductsState, UpdateProductPayload } from "./types";

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
      return products;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "خطا در دریافت محصولات");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, price, quantity }: UpdateProductPayload, thunkAPI) => {
    try {
      if (price !== undefined) {
        const updatedProduct = await updateProductPrice(id, price);
        return { id, price, updatedProduct };
      }
      return { id, quantity };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "خطا در بروزرسانی");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: string, thunkAPI) => {
    try {
      await deleteProductById(id);
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
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
