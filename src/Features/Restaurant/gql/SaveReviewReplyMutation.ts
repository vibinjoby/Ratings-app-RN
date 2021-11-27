import gql from 'graphql-tag'

export const SaveReviewReplyMutation = gql`
  mutation SaveReviewReplyMutation($reviewId: Int!, $ownerReply: String!) {
    createOwnerReply(reviewId: $reviewId, ownerReply: $ownerReply) {
      id
    }
  }
`
