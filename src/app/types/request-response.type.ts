export interface RequestResponse<T> {
  success: boolean;
  statusCode: number;
  code: string;
  message: string;
  data: T;
}
