import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import params from "./params";

class Client extends ApolloClient<NormalizedCacheObject> {
  private constructor() {
    super({
      uri: params.URL,
      cache: new InMemoryCache(),
      headers: {
        authorization: params.TOKEN,
      },
    });
  }

  static instance: ApolloClient<NormalizedCacheObject>;

  static getInstance() {
    if (!Client.instance) {
      Client.instance = new Client();
    }

    return Client.instance;
  }
}

export default Client.getInstance();
