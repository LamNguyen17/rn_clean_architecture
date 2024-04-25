import {ApiResType} from 'common/helper/APIHelper';
import RestApiGateway from 'data/gateway/RestApiGateway';
import {container, TYPES} from 'di';
import {injectable} from 'inversify';
import {Photos} from 'data/models/photo';

export interface PhotoRemoteDataSource {
  getPhoto(page: number, query?: string): Promise<ApiResType<Photos>>;
}

@injectable()
export class PhotoRemoteDataSourceImpl implements PhotoRemoteDataSource {
  async getPhoto(page: number, query?: string): Promise<ApiResType<Photos>> {
    const api = container.get<RestApiGateway>(TYPES.RestApiGateway);
    console.log('PhotoRemoteDataSourceImpl:', query);
    return await api.request<Photos>({
      path: query
        ? `?key=10378494-67ad2479ecf48567970bc1f0e&q=${query}&page=${page}&per_page=20`
        : `?key=10378494-67ad2479ecf48567970bc1f0e&page=${page}&per_page=20`,
      method: 'GET',
    });
  }
}
