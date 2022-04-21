import {
  ApolloCache,
  ApolloClient,
  ApolloQueryResult,
  DefaultContext,
  FetchResult,
  MutationOptions,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from "@apollo/client";

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

export interface CustomApolloClient<T extends NormalizedCacheObject>
  extends ApolloClient<T> {
  queryDoc<T = any, TVariables = OperationVariables>(
    options: QueryOptions<TVariables, T>
  ): Promise<ApolloQueryResult<T>>;
  mutateDoc<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TCache extends ApolloCache<any> = ApolloCache<any>
  >(
    options: MutationOptions<TData, TVariables, TContext, ApolloCache<any>>
  ): Promise<FetchResult<TData, Record<string, any>, Record<string, any>>>;
}
