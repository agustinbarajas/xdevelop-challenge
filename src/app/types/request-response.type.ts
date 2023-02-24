export interface RequestResponse<T> {
  success?: boolean;
  statusCode?: number;
  code: string;
  message: string;
  data: T;
}

export interface SignupSuccessResponse {
  empresa: number;
  msg: string;
  usuario: number;
}

export type SignupResponse =
  | RequestResponse<{ status: number }>
  | SignupSuccessResponse;
