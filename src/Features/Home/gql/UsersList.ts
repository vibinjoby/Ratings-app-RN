import gql from 'graphql-tag'

export const UsersList = gql`
  query UsersList {
    users {
      id
      fullName
      email
      userType
    }
  }
`
