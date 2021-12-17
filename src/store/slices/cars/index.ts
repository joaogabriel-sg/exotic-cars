import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CarType } from '@shared/types';

type InitialStateType = {
  cars: CarType[];
};

const initialState: InitialStateType = {
  cars: [],
};

const carsSlice = createSlice({
  name: '@cars',
  initialState,
  reducers: {
    setCars(state, action: PayloadAction<CarType[]>) {
      state.cars = action.payload;
    },
  },
});

export const { setCars } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
