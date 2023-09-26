import {ApiResType} from 'common/helper/APIHelper';

export interface PhotoRepository {
  getPhoto(): Promise<ApiResType<any>>;
}
