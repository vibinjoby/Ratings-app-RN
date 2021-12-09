import gql from 'graphql-tag'

export const RestaurantDetails = gql`
  query RestaurantDetails($id: Int!) {
    getRestaurant(id: $id) {
      restaurantName
      averageRatings
      reviews {
        id
        comments
        ratings
        ownerReply
        visitDate
        user {
          fullName
        }
      }
      highestRatedReviews {
        id
        comments
        ratings
        ownerReply
        visitDate
        user {
          fullName
        }
      }
      lowestRatedReviews {
        id
        comments
        ratings
        ownerReply
        visitDate
        user {
          fullName
        }
      }
    }
  }
`
