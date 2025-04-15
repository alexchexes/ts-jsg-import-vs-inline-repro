export type Merge<A, B> = {
  [K in keyof A as K extends keyof B ? never : K]: A[K];
} & B;
