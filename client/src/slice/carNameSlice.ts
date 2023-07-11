import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CarName } from '../types/sliceType';
import { instance } from '../api/axiosInstance';
import api from '../api/api';

const fetchCarNameList: any = createAsyncThunk('fetchCarNameList', async (carType: string, { rejectWithValue }) => {
  try {
    const res = await instance.get(api.fetchCarNameList(carType), {});
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.respopnse.data);
  }
});

export interface CarNameState {
  loading: boolean;
  error: any;
  carNameList: Array<CarName>;
}

const initialState: CarNameState = {
  loading: false,
  error: '',
  carNameList: [],
};

const CarNameSlice = createSlice({
  name: 'carName',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCarNameList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCarNameList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.carNameList = action.payload;
      })
      .addCase(fetchCarNameList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export { fetchCarNameList };

export const {} = CarNameSlice.actions;

export default CarNameSlice;
