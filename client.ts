import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { relayStylePagination } from '@apollo/client/utilities'

import { getData } from './src/utilities/helpers'

const httpLink = createHttpLink({
  uri: 'https://ratings-nest-gql.herokuapp.com/graphql',
})

const authLink = setContext(async (_, { headers }) => {
  const data = await getData('userInfo')
  return {
    headers: {
      ...headers,
      authorization: data?.token ? `Bearer ${data.token}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getRestaurants: relayStylePagination(),
        },
      },
    },
  }),
  connectToDevTools: __DEV__,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
})
