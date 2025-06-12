export type NonNullableFields<T extends object> = {
  [K in keyof T]: NonNullable<T[K]>
}
