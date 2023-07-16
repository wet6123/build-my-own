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
