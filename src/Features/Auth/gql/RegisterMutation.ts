import gql from 'graphql-tag'

export const RegisterMutation = gql`
  mutation Register($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      token
    }
  }
`
