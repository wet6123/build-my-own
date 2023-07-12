export interface CarName {
  id: number;
  carName: string;
  carType: string;
  startPrice: number;
  carImage: string;
  isNew: boolean;
}

export interface PowertrainList {
  engine: Array<string>;
  transmission: Array<string>;
  drivetrain: Array<string>;
}

export interface Powertrain {
  engine: string;
  transmission: string;
  drivetrain: string;
}

export interface AxiosResponseError {
  data: string;
  statusCode: number;
  message: string;
}
