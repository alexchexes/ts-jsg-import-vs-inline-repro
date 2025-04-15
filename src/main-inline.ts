type Merge<A, B> = {
  [K in keyof A as K extends keyof B ? never : K]: A[K];
} & B;

type Simplify<T> = {
  [K in keyof T]: T[K];
} & {};

type OverrideSimple<A, B> = Simplify<Merge<A, B>>;

type Base = {
  foo: string;
  bar: number;
};

type Patch = {
  bar: string;
  baz: boolean;
};

export type MyObject = OverrideSimple<Base, Patch>;
