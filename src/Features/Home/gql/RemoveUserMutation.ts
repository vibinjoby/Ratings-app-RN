import gql from 'graphql-tag'

export const RemoveUserMutation = gql`
  mutation RemoveUserMutation($id: Int!) {
    removeUser(id: $id)
  }
`
