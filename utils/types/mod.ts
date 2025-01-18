// deno-lint-ignore ban-types
export type StringOrLiteral<T extends string> = T | (string & {});
// deno-lint-ignore ban-types
export type NumberOrLiteral<T extends number> = T | (number & {});
export type NumberStringOrLiteral<T extends `${number}`> =
  | T
  // deno-lint-ignore ban-types
  | (`${number}` & {});

export type SafeExclude<T, U extends T> = T extends U ? never : T;
