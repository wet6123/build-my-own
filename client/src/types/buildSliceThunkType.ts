import { Color } from './sliceType';

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
  exterior: Array<Color>;
}

export interface FetchInteriorReq {
  carNameId: number;
  modelId: number;
  exteriorId: number;
}

export interface FetchInteriorRes {
  interior: Array<Color>;
}
