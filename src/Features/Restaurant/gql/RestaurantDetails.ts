import gql from 'graphql-tag'

export const RestaurantDetails = gql`
  query RestaurantDetails($id: Int) {
    getRestaurant(id: $id) {
      restaurantName
      averageRatings
      reviews {
        id
        comments
        ownerReply
        visitDate
      }
    }
  }
`
