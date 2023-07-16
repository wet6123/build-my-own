import { configureStore } from '@reduxjs/toolkit';
import CarNameSlice from '../slice/carNameSlice';
import { PowertarinSlice } from '../slice/modelSlice';

const store = configureStore({
  reducer: {
    carName: CarNameSlice.reducer,
    powertrain: PowertarinSlice.reducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
