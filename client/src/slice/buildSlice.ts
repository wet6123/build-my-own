import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ChangeModelReq,
  ChangeModelRes,
  CheckExInReq,
  CheckExInRes,
  FetchClosestTrimReq,
  FetchClosestTrimRes,
  FetchExteriorReq,
  FetchExteriorRes,
  FetchInteriorReq,
  FetchInteriorRes,
  FetchModelInfoReq,
  FetchModelInfoRes,
  FetchOptionInfoReq,
  FetchOptionInfoRes,
  FetchOptionListReq,
  FetchOptionListRes,
  ModelPreviewReq,
  ModelPreviewRes,
} from '../types/buildSliceThunkType';
import api from '../api/api';
import { instance } from '../api/axiosInstance';
import { AxiosResponseError, Option, Trim } from '../types/sliceType';

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

const fetchOptionList = createAsyncThunk<FetchOptionListRes, FetchOptionListReq, { rejectValue: AxiosResponseError }>(
  'fetchOptionList',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.post(api.fetchOptionList(), payload, {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

const fetchClosestTrim = createAsyncThunk<
  FetchClosestTrimRes,
  FetchClosestTrimReq,
  { rejectValue: AxiosResponseError }
>('fetchClosestTrim', async (payload, { rejectWithValue }) => {
  try {
    const res = await instance.get(api.fetchClosestTrim(payload), {});
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const changeTrim = createAsyncThunk<CheckExInRes, CheckExInReq, { rejectValue: AxiosResponseError }>(
  'changeTrim',
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

const modelPreview = createAsyncThunk<ModelPreviewRes, ModelPreviewReq, { rejectValue: AxiosResponseError }>(
  'modelPreview',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.post(api.modelPreview(), payload, {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

const changeModel = createAsyncThunk<ChangeModelRes, ChangeModelReq, { rejectValue: AxiosResponseError }>(
  'changeModel',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.post(api.changeModel(), payload, {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

const fetchModelInfo = createAsyncThunk<FetchModelInfoRes, FetchModelInfoReq, { rejectValue: AxiosResponseError }>(
  'fetchModelInfo',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.get(api.fetchModelInfo(payload), {});
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

const fetchOptionInfo = createAsyncThunk<FetchOptionInfoRes, FetchOptionInfoReq, { rejectValue: AxiosResponseError }>(
  'fetchOptionInfo',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.post(api.fetchOptionInfo(), payload, {});
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
  type: string;
  warning: string;
  interiorId: number;
  exteriorId: number;
  nextInteriorId: number;
  nextExteriorId: number;
  exteriorList: Array<Option>;
  interiorList: Array<Option>;

  nextOptionList: Array<Option>;
  optionList: Array<Option>;
  nextSelected: Array<number>;
  selected: Array<number>;
  add: Array<Option>;
  remove: Array<Option>;
  target: Option | null;

  beforeTrim: Trim | null;
  afterTrim: Trim | null;
  targetModelId: number;
  targetInterior: number;

  previewPrice: number;
  previewAdd: Array<Option>;
  previewRemove: Array<Option>;

  modelName: string;
  trim: string;
  price: number;
  displacement: number;
  averageMileage: number;

  optionInfo: Array<Option>;
  totalPrice: number;

  interiorPreview: string;
  exteriorPreview: string;

  showPreview: string;
  optionExpand: boolean;
}

const initialState: BuildState = {
  loading: false,
  error: '',
  available: true,
  type: '',
  warning: '',
  interiorId: 0,
  exteriorId: 0,
  nextInteriorId: 0,
  nextExteriorId: 0,
  exteriorList: [],
  interiorList: [],

  nextOptionList: [],
  optionList: [],
  nextSelected: [],
  selected: [],
  add: [],
  remove: [],
  target: null,

  beforeTrim: null,
  afterTrim: null,
  targetModelId: 0,
  targetInterior: 0,

  previewPrice: 0,
  previewAdd: [],
  previewRemove: [],

  modelName: '',
  trim: '',
  price: 0,
  displacement: 0,
  averageMileage: 0,

  optionInfo: [],
  totalPrice: 0,

  interiorPreview: '',
  exteriorPreview: '',

  showPreview: 'ex',
  optionExpand: false,
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
    resetColor: state => {
      state.interiorId = 0;
      state.exteriorId = 0;
      state.nextInteriorId = 0;
      state.nextExteriorId = 0;
      state.exteriorList = [];
      state.interiorList = [];
    },
    resetCheckState: state => {
      state.type = '';
      state.warning = '';
      state.available = true;
      state.beforeTrim = null;
      state.afterTrim = null;
      state.targetModelId = 0;
      state.targetInterior = 0;
    },
    setOptionList: (state, action) => {
      state.optionList = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    resetOptionList: state => {
      state.optionList = [];
      state.selected = [];
      state.add = [];
      state.remove = [];
    },
    setInterior: (state, action) => {
      state.targetInterior = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setInteriorPreview: (state, action) => {
      state.interiorPreview = action.payload;
    },
    setExteriorPreview: (state, action) => {
      state.exteriorPreview = action.payload;
    },
    setShowPreview: (state, action) => {
      state.showPreview = action.payload;
    },
    SetOptionExpand: (state, action) => {
      state.optionExpand = action.payload;
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
        state.type = action.payload.type;
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
      })
      .addCase(fetchOptionList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchOptionList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.nextOptionList = action.payload.options;
        state.nextSelected = action.payload.selected;
        state.add = action.payload.add;
        state.remove = action.payload.remove;
        state.target = action.payload.target;
      })
      .addCase(fetchOptionList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchClosestTrim.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchClosestTrim.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.beforeTrim = action.payload.beforeTrim;
        state.afterTrim = action.payload.afterTrim;
        state.targetModelId = action.payload.modelId;
        state.targetInterior = action.payload.interior;
      })
      .addCase(fetchClosestTrim.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeTrim.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(changeTrim.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.available = action.payload.available;
        state.type = action.payload.type;
        state.warning = action.payload.warning;
        if (action.payload.available) {
          state.interiorId = 0;
          state.exteriorId = 0;
          state.nextInteriorId = action.payload.interiorId;
          state.nextExteriorId = action.payload.exteriorId;
        }
      })
      .addCase(changeTrim.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(modelPreview.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(modelPreview.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.previewPrice = action.payload.price;
        state.previewAdd = action.payload.add;
        state.previewRemove = action.payload.remove;
      })
      .addCase(modelPreview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeModel.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(changeModel.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.optionList = action.payload.options;
        state.selected = action.payload.selected;
      })
      .addCase(changeModel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchModelInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchModelInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.modelName = action.payload.modelName;
        state.trim = action.payload.trim;
        state.price = action.payload.price;
        state.displacement = action.payload.displacement;
        state.averageMileage = action.payload.averageMileage;
      })
      .addCase(fetchModelInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchOptionInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchOptionInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.optionInfo = action.payload.optionInfo;
      })
      .addCase(fetchOptionInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export {
  checkExIn,
  fetchExterior,
  fetchInterior,
  fetchOptionList,
  fetchClosestTrim,
  changeTrim,
  modelPreview,
  changeModel,
  fetchModelInfo,
  fetchOptionInfo,
};

export const {
  setNextInterior,
  setNextExterior,
  resetColor,
  resetCheckState,
  setOptionList,
  setSelected,
  resetOptionList,
  setInterior,
  setTotalPrice,
  setInteriorPreview,
  setExteriorPreview,
  setShowPreview,
  SetOptionExpand,
} = BuildSlice.actions;

export default BuildSlice.reducer;
