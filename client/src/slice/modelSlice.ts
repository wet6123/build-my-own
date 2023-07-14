import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../api/axiosInstance';
import api from '../api/api';
import { AxiosResponseError, Powertrain, PowertrainList, Trim } from '../types/sliceType';
import { ChangePowertrainReq, FetchTrimReq } from '../types/modelSliceThunkType';

const fetchPowertrainList = createAsyncThunk('fetchPowertrainList', async (carNameId: number, { rejectWithValue }) => {
  try {
    const res = await instance.get(api.fetchPowertrainList(carNameId), {});
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const changePowertrain = createAsyncThunk<Powertrain, ChangePowertrainReq, { rejectValue: AxiosResponseError }>(
  'changePowertrain',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.post(api.changePowertrain(), payload, {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

const fetchPowertrainCombination = createAsyncThunk(
  'fetchPowertrainCombination',
  async (carNameId: number, { rejectWithValue }) => {
    try {
      const res = await instance.get(api.fetchPowertrainCombination(carNameId), {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

const fetchTrimList = createAsyncThunk<{ trimList: Array<Trim> }, FetchTrimReq, { rejectValue: AxiosResponseError }>(
  'fetchTrimList',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.post(api.fetchTrimList(), payload, {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export interface PowertrainState {
  loading: boolean;
  error: any;
  powertrainList: PowertrainList;
  powertrain: Powertrain;
  powertrainCombination: Array<Powertrain>;
  trimList: Array<Trim>;
  showBuildDropdown: boolean;
}

const initialState: PowertrainState = {
  loading: false,
  error: '',
  powertrainList: {
    engine: [],
    transmission: [],
    drivetrain: [],
  },
  powertrain: {
    engine: '',
    transmission: '',
    drivetrain: '',
  },
  powertrainCombination: [],
  trimList: [],
  showBuildDropdown: false,
};

export const PowertarinSlice = createSlice({
  name: 'powertrain',
  initialState,
  reducers: {
    toggleBuildDropdown: state => {
      state.showBuildDropdown = !state.showBuildDropdown;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPowertrainList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPowertrainList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.powertrainList = action.payload;
      })
      .addCase(fetchPowertrainList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changePowertrain.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(changePowertrain.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.powertrain = action.payload;
      })
      .addCase(changePowertrain.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPowertrainCombination.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPowertrainCombination.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.powertrainCombination = action.payload;
      })
      .addCase(fetchPowertrainCombination.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTrimList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTrimList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.trimList = action.payload.trimList;
      })
      .addCase(fetchTrimList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export { fetchPowertrainList, changePowertrain, fetchPowertrainCombination, fetchTrimList };

export const { toggleBuildDropdown } = PowertarinSlice.actions;

export default PowertarinSlice.reducer;
