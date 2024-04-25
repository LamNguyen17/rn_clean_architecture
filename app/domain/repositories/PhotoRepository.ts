import {ApiResType} from 'common/helper/APIHelper';
import {Photos} from 'domain/entities/photo';

export interface PhotoRepository {
  getPhoto(page: number, query?: string): Promise<ApiResType<Photos>>;
}
