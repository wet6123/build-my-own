import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CheckExInReq,
  CheckExInRes,
  FetchExteriorReq,
  FetchExteriorRes,
  FetchInteriorReq,
  FetchInteriorRes,
} from '../types/buildSliceThunkType';
import api from '../api/api';
import { instance } from '../api/axiosInstance';
import { AxiosResponseError, Color } from '../types/sliceType';

const checkExIn = createAsyncThunk<CheckExInRes, CheckExInReq, { rejectValue: AxiosResponseError }>(
  'checkExIn',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.get(api.checkExIn(payload), {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

const fetchExterior = createAsyncThunk<FetchExteriorRes, FetchExteriorReq, { rejectValue: AxiosResponseError }>(
  'fetchExterior',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.get(api.fetchExterior(payload), {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

const fetchInterior = createAsyncThunk<FetchInteriorRes, FetchInteriorReq, { rejectValue: AxiosResponseError }>(
  'fetchInterior',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.get(api.fetchInterior(payload), {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export interface BuildState {
  loading: boolean;
  error: any;
  available: boolean;
  warning: string;
  interiorId: number;
  exteriorId: number;
  nextInteriorId: number;
  nextExteriorId: number;
  exteriorList: Array<Color>;
  interiorList: Array<Color>;
}

const initialState: BuildState = {
  loading: false,
  error: '',
  available: true,
  warning: '',
  interiorId: 0,
  exteriorId: 0,
  nextInteriorId: 0,
  nextExteriorId: 0,
  exteriorList: [],
  interiorList: [],
};

export const BuildSlice = createSlice({
  name: 'build',
  initialState,
  reducers: {
    setNextInterior: (state, action) => {
      state.nextInteriorId = action.payload;
    },
    setNextExterior: (state, action) => {
      state.nextExteriorId = action.payload;
    },
    resetCheckState: state => {
      state.warning = '';
      state.available = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(checkExIn.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(checkExIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.available = action.payload.available;
        state.warning = action.payload.warning;
        if (action.payload.available) {
          state.interiorId = action.payload.interiorId;
          state.exteriorId = action.payload.exteriorId;
        }
      })
      .addCase(checkExIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchExterior.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchExterior.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.exteriorList = action.payload.exterior;
      })
      .addCase(fetchExterior.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchInterior.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchInterior.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.interiorList = action.payload.interior;
      })
      .addCase(fetchInterior.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export { checkExIn, fetchExterior, fetchInterior };

export const { setNextInterior, setNextExterior, resetCheckState } = BuildSlice.actions;

export default BuildSlice.reducer;
