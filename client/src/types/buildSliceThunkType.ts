import { Option, Trim } from './sliceType';

export interface CheckExInReq {
  beforeEx: number;
  beforeIn: number;
  carNameId: number;
  exterior: number;
  interior: number;
  modelId: number;
}

export interface CheckExInRes {
  available: boolean;
  type: string;
  warning: string;
  interiorId: number;
  exteriorId: number;
}

export interface FetchExteriorReq {
  carNameId: number;
  modelId: number;
  interiorId: number;
}

export interface FetchExteriorRes {
  exterior: Array<Option>;
}

export interface FetchInteriorReq {
  carNameId: number;
  modelId: number;
  exteriorId: number;
}

export interface FetchInteriorRes {
  interior: Array<Option>;
}

export interface FetchOptionListReq {
  modelId: number;
  optionId?: number;
  selected: Array<number>;
  type: string;
}

export interface FetchOptionListRes {
  selected: Array<number>;
  options: Array<Option>;
  add: Array<Option>;
  remove: Array<Option>;
  target: Option;
}

export interface FetchClosestTrimReq {
  interior: number;
  modelId: number;
}

export interface FetchClosestTrimRes {
  beforeTrim: Trim;
  afterTrim: Trim;
  modelId: number;
  interior: number;
}

export interface ModelPreviewReq {
  currentId: number;
  targetId: number;
  selected: Array<number>;
}

export interface ModelPreviewRes {
  price: number;
  add: Array<Option>;
  remove: Array<Option>;
}

export interface ChangeModelReq {
  currentId: number;
  targetId: number;
  selected: Array<number>;
}

export interface ChangeModelRes {
  selected: Array<number>;
  options: Array<Option>;
}

export interface FetchModelInfoReq {
  modelId: number;
}

export interface FetchModelInfoRes {
  modelName: string;
  trim: string;
  price: number;
  displacement: number;
  averageMileage: number;
}

export interface FetchOptionInfoReq {
  optionList: Array<number>;
}

export interface FetchOptionInfoRes {
  optionInfo: Array<Option>;
}
