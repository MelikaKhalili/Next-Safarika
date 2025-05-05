import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  customer_name: string;
  customer_address: string;
  customer_phone: string;
  nationalcode: string;
}

const initialState: FormState = {
  customer_name: "",
  customer_address: "",
  customer_phone: "",
  nationalcode: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.customer_name = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.customer_address = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.customer_phone = action.payload;
    },
    setNationalcode: (state, action: PayloadAction<string>) => {
      state.nationalcode = action.payload;
    },
  },
});

export const { setName, setAddress, setPhone, setNationalcode } =
  formSlice.actions;
export default formSlice.reducer;
