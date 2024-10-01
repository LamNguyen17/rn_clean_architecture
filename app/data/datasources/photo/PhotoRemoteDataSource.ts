import {ApiResType} from 'common/helper/APIHelper';
import RestApiGateway from 'data/gateway/RestApiGateway';
import {container, TYPES} from 'di';
import {injectable} from 'inversify';
import {Photos} from 'data/models/photo';
import { RemoteConfigHelper } from 'common/helper/RemoteConfigHelper';
import { getAppConfig } from 'data/config/Config';

export interface PhotoRemoteDataSource {
  getPhoto(page: number, query?: string): Promise<ApiResType<Photos>>;
}

const config = getAppConfig();
@injectable()
export class PhotoRemoteDataSourceImpl implements PhotoRemoteDataSource {
  async getPhoto(page: number, query?: string): Promise<ApiResType<Photos>> {
    const api = container.get<RestApiGateway>(TYPES.RestApiGateway);
    const apiKey1 = RemoteConfigHelper.getApiKey();
    const apiKey = '10378494-67ad2479ecf48567970bc1f0e';
    console.log('PhotoRemoteDataSourceImpl:', apiKey, ' - ', apiKey1, ' - ', config.apiKey);
    return await api.request<Photos>({
      path: query
        ? `?key=${apiKey}&q=${query}&page=${page}&per_page=20`
        : `?key=${apiKey}&page=${page}&per_page=20`,
      method: 'GET',
    });
  }
}
