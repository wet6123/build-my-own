import { Option } from './sliceType';

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
