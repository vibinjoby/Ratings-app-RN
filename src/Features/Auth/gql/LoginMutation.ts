import gql from 'graphql-tag'

export const LoginMutation = gql`
  mutation Login($loginInput: LoginInput!) {
    login(data: $loginInput) {
      token
    }
  }
`
