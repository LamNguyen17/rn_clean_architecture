export default class MemoryGateway {
  private static _instance = new MemoryGateway();
  _data: any;
  constructor() {
    if (MemoryGateway._instance) {
      throw new Error(
        'Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.',
      );
    }
    MemoryGateway._instance = this;

    this._data = {};
  }

  static getInstance() {
    return MemoryGateway._instance;
  }

  static get(key: string) {
    return MemoryGateway.getInstance()._get(key);
  }

  static set(key: string, value: any) {
    MemoryGateway.getInstance()._set(key, value);
  }

  static clear() {
    MemoryGateway.getInstance()._clear();
  }

  private _get = (key: string) => {
    if (this._data) {
      const value = this._data[key];
      return value ? value : null;
    }
    return null;
  };

  private _set = (key: string, value: any) => {
    if (this._data) {
      this._data[key] = value;
    }
    return true;
  };

  private _clear = () => {
    this._data = {};
  };
}
