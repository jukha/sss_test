export function mapAllTo<T extends string>(keys: T[], value: boolean) {
  return keys.reduce((acc, key) => {
    acc[key] = value;
    return acc;
  }, {} as Record<T, boolean>);
}
