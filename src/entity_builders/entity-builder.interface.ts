export interface IEntityBuilder<T, K> {
  build(entity: T, customMapper?: (x: T, y: K) => void): K;

  buildMany(entities: T[], customMapper?: (x: T, y: K) => void): K[];
}