import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import productDisplayReducer from './productDisplay'

export default configureStore({
  reducer: {
    counter: counterReducer,
    product_display: productDisplayReducer
  }
})