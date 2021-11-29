import gql from 'graphql-tag'

export const RemoveReviewMutation = gql`
  mutation RemoveReviewMutation($id: Int!) {
    removeReview(id: $id)
  }
`
