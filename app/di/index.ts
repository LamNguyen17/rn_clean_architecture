import {Container} from 'inversify';
import 'reflect-metadata';
import StorageGateway from 'data/gateway/StorageGateway';
import RestApiGateway from 'data/gateway/RestApiGateway';
import {
  PhotoRemoteDataSource,
  PhotoRemoteDataSourceImpl,
} from 'data/datasources/photo/PhotoRemoteDataSource';
import {PhotoRepository} from 'domain/repositories/PhotoRepository';
import {PhotoRepositoryImpl} from 'data/repositories/PhotoRepositoryImpl';
import {GetPhotoUseCase} from 'domain/usecases/photo/GetPhotoUseCase';

const TYPES = {
  StorageGateway: Symbol.for('StorageGateway'),
  RestApiGateway: Symbol.for('RestApiGateway'),
  PhotoRemoteDataSource: Symbol.for('PhotoRemoteDataSource'),
  PhotoRemoteDataSourceImpl: Symbol.for('PhotoRemoteDataSourceImpl'),
  PhotoRepository: Symbol.for('PhotoRepository'),
  PhotoRepositoryImpl: Symbol.for('PhotoRepositoryImpl'),
  GetPhotoUseCase: Symbol.for('GetPhotoUseCase'),
};

const container = new Container();
container.bind<RestApiGateway>(TYPES.RestApiGateway).to(RestApiGateway);
container.bind<StorageGateway>(TYPES.StorageGateway).to(StorageGateway);

/** region Data */
container
  .bind<PhotoRemoteDataSource>(TYPES.PhotoRemoteDataSource)
  .to(PhotoRemoteDataSourceImpl);
container.bind<PhotoRepository>(TYPES.PhotoRepository).to(PhotoRepositoryImpl);
/** endregion Data **/

/** region Domain */
container.bind<GetPhotoUseCase>(TYPES.GetPhotoUseCase).to(GetPhotoUseCase);
/** endregion Domain **/

export {container, TYPES};
