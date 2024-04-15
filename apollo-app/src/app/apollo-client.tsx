"use client";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function client() {
  const httpLink = new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
    fetchOptions: { cache: "no-store" },
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
        : httpLink,
  });
}

export default function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="app-container">

      <div className="background-container"></div>
      <ApolloNextAppProvider makeClient={client}>
        {children}
      </ApolloNextAppProvider>
    </div>
  );
}
