export type SimpleEventSubscription = {
  unsubscribe: () => void;
};

export type SimpleEventSubscribeOnly<T> = Pick<SimpleEvent<T>, 'addEventListener' | 'removeEventListener' | 'promisify'>;

export class SimpleEvent<TData> {
  private readonly _listeners: ((v: TData) => void)[] = [];

  addEventListener(callback: (v: TData) => void): SimpleEventSubscription {
    this._listeners.push(callback);

    return {
      unsubscribe: () => this.removeEventListener(callback),
    };
  }

  emit(value: TData) {
    this._listeners.forEach((f) => f(value));
  }

  removeEventListener(callback: (v: TData) => void) {
    this._listeners.splice(this._listeners.indexOf(callback), 1);
  }

  asSubscribeOnlyEvent() {
    return this as SimpleEventSubscribeOnly<TData>;
  }

  promisify() {
    return () => new Promise<TData>((resolve) => {
      const onEvent = (v: TData) => {
        resolve(v);
        this.removeEventListener(onEvent);
      }

      this.addEventListener(onEvent);
    })
  }
}
