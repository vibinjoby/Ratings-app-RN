import gql from 'graphql-tag'

export const RestaurantList = gql`
  query RestaurantList($first: Float, $offset: Float) {
    getRestaurants(first: $first, offset: $offset) {
      page {
        edges {
          node {
            restaurantName
            id
            restaurantName
            address
            contactNumber
            averageRatings
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
      pageData {
        count
      }
    }
  }
`
