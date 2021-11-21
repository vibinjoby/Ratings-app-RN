import gql from 'graphql-tag'

export const RestaurantList = gql`
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
