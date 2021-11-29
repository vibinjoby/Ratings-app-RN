import gql from 'graphql-tag'

export const UpdateReviewMutation = gql`
  mutation UpdateReviewMutation($updateReviewInput: UpdateReviewInput!) {
    updateReview(updateReviewInput: $updateReviewInput) {
      id
      comments
      ownerReply
      visitDate
      ratings
    }
  }
`
