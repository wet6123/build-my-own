export interface ChangePowertrainReq {
  carNameId: number;
  drivetrain: string | null;
  engine: string | null;
  transmission: string | null;
}

export interface FetchTrimReq {
  carNameId: number;
  drivetrain: string | null;
  engine: string | null;
  transmission: string | null;
}
