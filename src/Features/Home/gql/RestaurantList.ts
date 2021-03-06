import gql from 'graphql-tag'

export const RestaurantList = gql`
  query RestaurantList($first: Float, $offset: Float) {
    getRestaurants(first: $first, offset: $offset) {
      edges {
        node {
          restaurantName
          id
          restaurantName
          address
          contactNumber
          averageRatings
          reviewsCount
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`
