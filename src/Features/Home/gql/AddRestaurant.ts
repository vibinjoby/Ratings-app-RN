import gql from 'graphql-tag'

export const AddRestaurantMutation = gql`
  mutation CreateRestaurant($createRestaurantInput: CreateRestaurantInput!) {
    createRestaurant(createRestaurantInput: $createRestaurantInput) {
      id
    }
  }
`
