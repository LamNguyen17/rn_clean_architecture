import {ApiResType} from 'common/helper/APIHelper';
import RestApiGateway from 'data/gateway/RestApiGateway';
import {container, TYPES} from 'di';
import {injectable} from 'inversify';

export interface PhotoRemoteDataSource {
  getPhoto(): Promise<ApiResType<any>>;
}

@injectable()
export class PhotoRemoteDataSourceImpl implements PhotoRemoteDataSource {
  async getPhoto(): Promise<ApiResType<any>> {
    const api = container.get<RestApiGateway>(TYPES.RestApiGateway);
    return await api.request({
      path: '?key=10378494-67ad2479ecf48567970bc1f0e&page=1&per_page=6',
      method: 'GET',
    });
  }
}
