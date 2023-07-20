import { configureStore } from '@reduxjs/toolkit';
import CarNameSlice from '../slice/carNameSlice';
import { PowertarinSlice } from '../slice/modelSlice';
import { BuildSlice } from '../slice/buildSlice';

const store = configureStore({
  reducer: {
    carName: CarNameSlice.reducer,
    powertrain: PowertarinSlice.reducer,
    build: BuildSlice.reducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
