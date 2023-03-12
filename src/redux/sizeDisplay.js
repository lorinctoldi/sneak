import { createSlice } from '@reduxjs/toolkit';

export const sizeDisplaySlice = createSlice({
  name: 'size-display',
  initialState: {
    size_display: true
  },
  reducers: {
    changeSizeDisplay: (state) => {
      state.size_display = !state.size_display
    }
  }
})

export const { changeSizeDisplay } = sizeDisplaySlice.actions

export default sizeDisplaySlice.reducer