import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import productDisplayReducer from './productDisplay'
import sizeDisplayReducer from './sizeDisplay';

export default configureStore({
  reducer: {
    counter: counterReducer,
    product_display: productDisplayReducer,
    size_display: sizeDisplayReducer
  }
})