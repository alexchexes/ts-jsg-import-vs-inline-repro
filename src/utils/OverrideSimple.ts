import { Merge } from "./Merge";
import { Simplify } from "./Simplify";

export type OverrideSimple<A, B> = Simplify<Merge<A, B>>;
