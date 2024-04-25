import {inject, injectable} from 'inversify';
import 'reflect-metadata';

import {TYPES} from 'di';
import {ApiResType} from 'common/helper/APIHelper';
import {BaseUseCase} from 'domain/usecases/BaseUseCase';
import {PhotoRepository} from 'domain/repositories/PhotoRepository';
import {Photos} from 'domain/entities/photo';

@injectable()
export class GetPhotoUseCase implements BaseUseCase<ApiResType<Photos>> {
  @inject(TYPES.PhotoRepository)
  private readonly _repository!: PhotoRepository;

  execute({page, query}: {page: number; query?: string}): Promise<ApiResType<Photos>> {
    return this._repository.getPhoto(page, query);
  }
}
