import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StorageGateway {
  private static _instance = new StorageGateway();

  constructor() {
    if (StorageGateway._instance) {
      throw new Error(
        'Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.',
      );
    }
    StorageGateway._instance = this;
  }

  static getInstance() {
    return StorageGateway._instance;
  }

  static get = (key: string): Promise<string | null> => {
    return AsyncStorage.getItem(key);
  };

  static saveString = (key: string, value: string) => {
    return AsyncStorage.setItem(key, value);
  };

  static saveObject = (key: string, objData: object | any) => {
    return AsyncStorage.setItem(key, JSON.stringify(objData));
  };

  static clear = (key: string) => {
    return AsyncStorage.removeItem(key);
  };
}
