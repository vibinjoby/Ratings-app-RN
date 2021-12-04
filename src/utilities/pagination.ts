import { FieldPolicy } from '@apollo/client'
import { uniqBy } from 'lodash'

type keyArgs = FieldPolicy['keyArgs']

export const relayStyleConcatPagination = (keyArgs: keyArgs = false): FieldPolicy => {
  return {
    keyArgs,
    merge: (existing, incoming) => {
      if (!existing) return incoming
      if (!incoming) return existing

      return {
        ...incoming,
        page: {
          edges: uniqBy([...existing.page.edges, ...incoming.page.edges], 'node.__ref'),
        },
      }
    },
  }
}
