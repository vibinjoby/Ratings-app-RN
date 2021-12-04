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
        edges: uniqBy([...existing.edges, ...incoming.edges], 'node.__ref'),
      }
    },
  }
}
