import {injectable, inject} from 'inversify';

import {TYPES} from 'di';
import {PhotoRepository} from 'domain/repositories/PhotoRepository';
import {PhotoRemoteDataSource} from 'data/datasources/photo/PhotoRemoteDataSource';
import {ApiResType} from 'common/helper/APIHelper';

@injectable()
export class PhotoRepositoryImpl implements PhotoRepository {
  @inject(TYPES.PhotoRemoteDataSource)
  private dataSource: PhotoRemoteDataSource | any;

  async getPhoto(): Promise<ApiResType<any>> {
    console.log('PhotoRepositoryImpl:', this.dataSource.getPhoto());
    return this.dataSource.getPhoto();
  }
}
