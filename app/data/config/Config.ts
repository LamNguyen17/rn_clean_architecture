import { RemoteConfigHelper } from 'common/helper/RemoteConfigHelper';

export interface AppConfig {
  endpoint?: string;
  apiKey?: string;
}

const Environment = {
  Dev: 'Dev',
  Production: 'Production',
};

const getConfig = (env: string): AppConfig => {
  switch (env) {
    case Environment.Production:
    case Environment.Dev:
    default:
      return {
        endpoint: 'https://pixabay.com/api/',
        apiKey: RemoteConfigHelper.getApiKey(),
      };
  }
};

export const getAppConfig = (): AppConfig => {
  return getConfig(Environment.Production);
};
