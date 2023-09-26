import {inject, injectable} from 'inversify';

import {BaseUseCase} from 'domain/usecases/BaseUseCase';
import {PhotoRepository} from 'domain/repositories/PhotoRepository';
import {ApiResType} from 'common/helper/APIHelper';
import {TYPES} from 'di';

@injectable()
export class GetPhotoUseCase implements BaseUseCase<ApiResType<any>> {
  @inject(TYPES.PhotoRepository) private repository: PhotoRepository | any;

  execute(): Promise<ApiResType<any>> {
    console.log('GetPhotoUseCase:', this.repository.getPhoto());
    return this.repository.getPhoto();
  }
}
