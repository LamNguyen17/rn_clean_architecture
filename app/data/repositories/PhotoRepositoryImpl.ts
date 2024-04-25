import {injectable, inject} from 'inversify';

import {TYPES} from 'di';
import {PhotoRepository} from 'domain/repositories/PhotoRepository';
import {PhotoRemoteDataSource} from 'data/datasources/photo/PhotoRemoteDataSource';
import {ApiResType} from 'common/helper/APIHelper';
import {Photos} from 'data/models/photo';

@injectable()
export class PhotoRepositoryImpl implements PhotoRepository {
  @inject(TYPES.PhotoRemoteDataSource)
  private readonly _dataSource!: PhotoRemoteDataSource;

  async getPhoto(page: number, query?: string): Promise<ApiResType<Photos>> {
    return this._dataSource.getPhoto(page, query);
  }
}
