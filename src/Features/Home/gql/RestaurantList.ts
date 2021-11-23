import gql from 'graphql-tag'

export const RestaurantList = gql`
  query RestaurantList($limit: Float, $offset: Float) {
    getRestaurants(limit: $limit, offset: $offset) {
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
        }
      }
      pageData {
        count
      }
    }
  }
`
