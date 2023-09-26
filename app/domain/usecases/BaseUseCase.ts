export abstract class BaseUseCase<T> {
  abstract execute(payload?: any): Promise<T>;
}
