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

export interface Trim {
  modelId: number;
  trim: string;
  price: number;
  image: string;
  detail1: string;
  detail2: string;
  detail3: string;
  engine: string;
  transmission: string;
  drivetrain: string;
}

export interface Color {
  optionId: number;
  price: number;
  type: string;
  name: string;
  image: string;
  preview: string;
  available: boolean;
}

export interface AxiosResponseError {
  data: string;
  statusCode: number;
  message: string;
}
