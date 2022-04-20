export interface Response<T> {
  data: T;
}

export interface AsyncState<T> {
  loading: boolean;
  error?: Error;
  data?: T;
}

export interface MutationHook<T, K> {
  state: AsyncState<T>;
  mutation: (variables: K) => Promise<T | undefined>;
}
