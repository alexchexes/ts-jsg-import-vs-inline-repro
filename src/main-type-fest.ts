import type { OverrideProperties as Override } from 'type-fest';

interface SomeInterface {
  foo: string;
  bar: string;
  baz: null;
  qux: null;
}

export type MyObject = Override<
  SomeInterface,
  {
    baz: number;
    qux: number;
  }
>;
