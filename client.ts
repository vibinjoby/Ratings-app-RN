import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

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
          getRestaurants: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming.page.edges]
            },
          },
        },
      },
    },
  }),
})
