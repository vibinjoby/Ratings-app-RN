import gql from 'graphql-tag'

export const OwnerRestaurants = gql`
  query MyRestaurants {
    getOwnedrestaurants {
      id
      restaurantName
      address
      averageRatings
      reviews {
        id
        ratings
        comments
      }
    }
  }
`
