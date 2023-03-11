import { createSlice } from '@reduxjs/toolkit';

export const productDisplaySlice = createSlice({
  name: 'product-display',
  initialState: {
    product_display: true
  },
  reducers: {
    change: (state) => {
      state.product_display = !state.product_display
    }
  }
})

export const { change } = productDisplaySlice.actions

export default productDisplaySlice.reducer