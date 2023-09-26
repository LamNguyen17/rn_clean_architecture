import {ApiResType} from 'common/helper/APIHelper';
import RestApiGateway from 'data/gateway/RestApiGateway';
import {container, TYPES} from 'di';
import {injectable} from 'inversify';
import {Photos} from 'data/models/photo';

export interface PhotoRemoteDataSource {
  getPhoto(): Promise<ApiResType<Photos>>;
}

@injectable()
export class PhotoRemoteDataSourceImpl implements PhotoRemoteDataSource {
  async getPhoto(): Promise<ApiResType<Photos>> {
    const api = container.get<RestApiGateway>(TYPES.RestApiGateway);
    return await api.request<Photos>({
      path: '?key=10378494-67ad2479ecf48567970bc1f0e&page=1&per_page=20',
      method: 'GET',
    });
  }
}
