import { AppDispatch, ReduxStore } from '@store/types';

export type AsyncThunkConfigType = {
  state: ReduxStore;
  dispatch: AppDispatch;
};
