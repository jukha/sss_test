export class ValidationException<T extends object> extends Error {
  constructor(public readonly validationErrors: T) {
    super();
  }
}
