import { globalErrorIsVersioning, GlobalErrorType } from '@/enum/global-error-type.enum';
import { SimpleEvent, SimpleEventSubscribeOnly } from '@/simple-event';

export type GlobalError<T> = {
  version?: number,
  type: GlobalErrorType,
  retryCallback: () => Promise<T>;
  retryResultEvent: SimpleEvent<T | Error>;
}

class GlobalErrorHandlerState {
  private _errors: GlobalError<unknown>[] = [];
  private _onErrorsUpdate = new SimpleEvent<typeof this._errors>();

  get onErrorsUpdate() {
    return this._onErrorsUpdate.asSubscribeOnlyEvent();
  }

  get errors() {
    return this._errors;
  }

  addError<T>(error: Omit<GlobalError<unknown>, 'retryResultEvent'>) {
    if (globalErrorIsVersioning(error.type)) {
      return this.addVersioningError<T>(error);
    }

    const retryResultEvent = new SimpleEvent<T>();

    this._errors = [...this._errors, {...error, retryResultEvent: retryResultEvent as SimpleEvent<unknown>}];
    this._onErrorsUpdate.emit(this._errors);

    return retryResultEvent.asSubscribeOnlyEvent() as SimpleEventSubscribeOnly<T | Error>;
  }

  clearErrors() {
    this._errors.forEach(e => e.retryResultEvent.emit(new Error()));
    this._errors = [];
    this._onErrorsUpdate.emit([]);
  }

  async recallErrorCallback(index: number) {
    try {
      const error = this._errors[index];
      const r = await error.retryCallback();
      error.retryResultEvent.emit(r);
    } catch {
      return false;
    }

    return true;
  }

  batchRemoveErrors(indices: number[], emitUpdate = true) {
    this._errors = this._errors.filter((_, i) => !indices.includes(i));
    if (emitUpdate) this._onErrorsUpdate.emit(this._errors);
  }

  private addVersioningError<T>(error: Omit<GlobalError<unknown>, 'retryResultEvent'>) {
    if (!error.version) {
      throw new Error(`Error type ${error.type} implies versioning, but no version was provided`);
    }

    if (!this.previousErrorIsOutdated(error.type, error.version)) {
      const existingError = this._errors.find(e => e.type === error.type);
      return existingError!.retryResultEvent.asSubscribeOnlyEvent() as SimpleEventSubscribeOnly<T | Error>;
    }

    const existingErrorIndex = this._errors.findIndex(e => e.type === error.type);
    const retryResultEvent = new SimpleEvent<T>();

    if (existingErrorIndex !== -1) {
      this.batchRemoveErrors([existingErrorIndex], false);
    }

    this._errors = [...this._errors, {...error, retryResultEvent: retryResultEvent as SimpleEvent<unknown>}];

    this._onErrorsUpdate.emit(this._errors);
    return retryResultEvent.asSubscribeOnlyEvent() as SimpleEventSubscribeOnly<T | Error>;
  }

  private previousErrorIsOutdated(type: GlobalErrorType, newVersion: number) {
    const existingError = this._errors.find(e => e.type === type);
    if (!existingError) return true;

    return (existingError.version || 0) <= newVersion;
  }
}

export const globalErrorHandlerState = new GlobalErrorHandlerState();
