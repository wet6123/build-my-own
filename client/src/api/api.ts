import { CheckExInReq, FetchExteriorReq } from '../types/buildSliceThunkType';

// 경로
const BUILD_URL = '/build';
const MODELS_URL = '/models';
const NAMES_URL = '/names';

// URI
// build
const AVAILABLE_URL = '/available';
const EXTERIOR_URL = '/exterior';
const INTERIOR_URL = '/interior';
const MODEL_URL = '/model';
const MODEL_INFO_URL = '/model/info';
const MODEL_PREVIEW_URL = '/model/preview';
const OPTION_URL = '/option';

// model
const POWERTRAIN_URL = '/powertrain';
const POWERTRAIN_LIST_URL = '/powertrain/list';
const TRIM_URL = '/trim';

// name

const api = {
  // build
  checkExIn: ({ beforeEx, beforeIn, carNameId, exterior, interior, modelId }: CheckExInReq) =>
    BUILD_URL +
    AVAILABLE_URL +
    `?beforeEx=${beforeEx}` +
    `&beforeIn=${beforeIn}` +
    `&carNameId=${carNameId}` +
    `&exterior=${exterior}` +
    `&interior=${interior}` +
    `&modelId=${modelId}`,
  fetchExterior: ({ carNameId, modelId, interiorId }: FetchExteriorReq) =>
    BUILD_URL + EXTERIOR_URL + `?carNameId=${carNameId}` + `&modelId=${modelId}` + `&interior=${interiorId}`,

  // model
  fetchPowertrainList: (carNameId: number) => MODELS_URL + POWERTRAIN_URL + `?car_name_id=${carNameId}`,
  changePowertrain: () => MODELS_URL + POWERTRAIN_URL,
  fetchPowertrainCombination: (carNameId: number) => MODELS_URL + POWERTRAIN_LIST_URL + `?car_name_id=${carNameId}`,
  fetchTrimList: () => MODELS_URL + TRIM_URL,
  // name
  fetchCarNameList: (carType: string) => NAMES_URL + `?type=${carType}`,
};

export default api;
