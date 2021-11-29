import gql from 'graphql-tag'

export const ReviewsList = gql`
  query ReviewsList($restaurantId: Int!) {
    findReviewsByRestaurantId(restaurantId: $restaurantId) {
      id
      comments
      visitDate
      ownerReply
      ratings
      restaurant {
        restaurantName
        reviews {
          id
          user {
            id
          }
        }
      }

      user {
        id
        fullName
        reviews {
          id
        }
        restaurants {
          id
        }
      }
    }
  }
`
