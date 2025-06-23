import type { OverrideProperties as Override } from 'type-fest';

/** 
 * Some description of the interface
 */
interface SomeInterface {
  foo: string;
  bar: string;
  baz: null;
  qux: null;
}

/** 
 * Some description of the object
 */
export type MyObject = Override<
  SomeInterface,
  {
    baz: number;
    qux: number;
  }
>;
