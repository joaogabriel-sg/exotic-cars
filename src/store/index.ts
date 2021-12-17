import { configureStore } from '@reduxjs/toolkit';

import { carsReducer } from './slices/cars';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
