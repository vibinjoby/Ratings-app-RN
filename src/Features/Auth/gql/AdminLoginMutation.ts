import gql from 'graphql-tag'

export const AdminLoginMutation = gql`
  mutation AdminLogin($adminInput: CreateAdminInput!) {
    loginAsAdmin(data: $adminInput) {
      token
    }
  }
`
