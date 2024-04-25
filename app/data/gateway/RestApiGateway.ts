import Axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getAppConfig} from 'data/config/Config';
import {ApiReqType, ApiResType} from 'common/helper/APIHelper';
import {injectable} from 'inversify';

@injectable()
export default class RestApiGateway {
  http: AxiosInstance;

  constructor() {
    const config = getAppConfig();
    this.http = Axios.create({
      baseURL: config.endpoint,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 20 * 1000,
    });
  }

  async request<D>(req: ApiReqType): Promise<ApiResType<D>> {
    try {
      const config = <AxiosRequestConfig>{
        method: req.method,
        url: req.path,
        params: req.params,
        data: req.body,
        headers: req.headers,
      };
      const res = await this.http.request(config);
      console.log('request:', res);
      return this.parseData<D>(res);
    } catch (err: any) {
      const errors = this.handleError(err?.response?.data);
      return {
        status: 'failed',
        errors,
        statusCode: err?.response?.status,
      };
    }
  }

  handleError = (errResponse: any) => {
    return errResponse?.message;
  };

  parseData<D>(res: AxiosResponse): ApiResType<D> {
    return {
      status: 'success',
      result: res?.data,
    };
  }
}
