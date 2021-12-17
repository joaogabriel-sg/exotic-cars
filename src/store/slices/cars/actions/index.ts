import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCars } from '@shared/services/api/cars/getCars';
import { AsyncThunkConfigType } from '@shared/types';
import { setCars } from '..';

export const fetchCars = createAsyncThunk<void, unknown, AsyncThunkConfigType>(
  '@cars/fetchCars',
  async (_, thunkApi) => {
    try {
      const cars = await getCars();
      thunkApi.dispatch(setCars(cars));
    } catch (error: any) {
      throw new Error(error);
    }
  }
);
