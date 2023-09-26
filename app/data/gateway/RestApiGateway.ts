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
      let snakeCasedParams;
      let snakeCasedBody = req.body;
      if (req.params) {
        snakeCasedParams = req.params;
      }
      const config = <AxiosRequestConfig>{
        method: req.method,
        url: req.path,
        params: snakeCasedParams,
        data: snakeCasedBody,
        headers: req.headers,
      };
      console.log('request_config:', config);
      const res = await this.http.request(config);
      console.log('request_success:', res);
      return this.parseData<D>(res);
    } catch (err: any) {
      console.log('request_err:', err);
      const errors =
        this.handleError(err?.response?.data) || err?.response?.data?.message;
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
