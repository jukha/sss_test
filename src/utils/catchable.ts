function catchable<T, A>(callback: (...args: A[]) => Promise<T>): (...args: A[]) => Promise<T | null> {
  return async (...args: A[]): Promise<T | null> => {
    try {
      return await callback(...args);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}

export default catchable;
