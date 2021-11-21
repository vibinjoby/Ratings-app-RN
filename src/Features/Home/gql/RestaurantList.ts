import gql from 'graphql-tag'

export const RestaurantList = gql`
  query RestaurantList {
    getRestaurants {
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
        limit
        offset
      }
    }
  }
`
