import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/carSlice/carSlice.js'

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
