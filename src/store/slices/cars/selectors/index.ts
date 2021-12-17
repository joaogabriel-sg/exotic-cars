import { ReduxStore } from '@store/types';

export const selectCars = (state: ReduxStore) => state.cars;
