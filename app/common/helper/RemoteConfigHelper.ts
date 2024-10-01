import MemoryGateway from 'data/gateway/MemoryGateway';
import { MEMORY_KEY } from 'common/constants';

export class RemoteConfigHelper {
  static getApiKey() {
    return MemoryGateway.get(MEMORY_KEY.API_KEY);
  }

  static setApiKey(apiKey: string) {
    return MemoryGateway.set(MEMORY_KEY.API_KEY, apiKey);
  }

}
