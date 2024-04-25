import {Method} from 'axios';

export type NetError = {
  status: 200;
  message: '';
  code: 0;
};

export type ApiSuccessType<D> = {
  status: 'success';
  result?: ApiResultType<D>;
};

export type ApiFailureType = {
  status: 'failed';
  errors: ErrorType[] | ErrorType;
  statusCode: number;
};

type StandardApiResult = {
  currentPage: number;
  totalPages: number;
  perPage: number;
  totalEntries: number;
};

export type ApiResultType<D> = StandardApiResult & {
  data: D;
};

export type ErrorType = {
  code: string;
  message: string;
};

export type ApiReqType = {
  path: string;
  method: Method;
  params?: any;
  body?: any;
  headers?: any;
};

export type ApiShowResType<D> = ApiSuccessType<D> | ApiFailureType;
export type ApiResType<D> = ApiShowResType<D>;
