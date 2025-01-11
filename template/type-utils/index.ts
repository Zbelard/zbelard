export type StringOrLiteral<T extends string> = T | (string & {});
export type NumberOrLiteral<T extends number> = T | (number & {});
export type NumberStringOrLiteral<T extends `${number}`> = T | (`${number}` & {});
