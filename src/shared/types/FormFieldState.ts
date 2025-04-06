import { Nullable } from "./Nullable";

export type FormFieldState<T = string> = {
  value: T;
  error?: Nullable<string>;
};
