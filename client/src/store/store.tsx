import { configureStore } from '@reduxjs/toolkit';
import CarNameSlice from '../slice/carNameSlice';

const store = configureStore({
  reducer: {
    carName: CarNameSlice.reducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;
