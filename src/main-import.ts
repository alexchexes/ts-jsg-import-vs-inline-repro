import { OverrideSimple } from "./utils/OverrideSimple";

type Base = {
  foo: string;
  bar: number;
};

type Patch = {
  bar: string;
  baz: boolean;
};

export type MyObject = OverrideSimple<Base, Patch>;
