import {Container} from 'inversify';
import 'reflect-metadata';
import StorageGateway from 'data/gateway/StorageGateway';
import RestApiGateway from 'data/gateway/RestApiGateway';

const TYPES = {
  StorageGateway: Symbol.for('StorageGateway'),
  RestApiGateway: Symbol.for('RestApiGateway'),
};

const container = new Container();
container.bind<RestApiGateway>(TYPES.RestApiGateway).to(RestApiGateway);
container.bind<StorageGateway>(TYPES.StorageGateway).to(StorageGateway);

/** region Data */

/** endregion Data **/

/** region Domain */

/** endregion Domain **/

/** region Presentation */

/** endregion Presentation **/

export {container, TYPES};
