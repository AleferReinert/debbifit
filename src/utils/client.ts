import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }
  }
})
