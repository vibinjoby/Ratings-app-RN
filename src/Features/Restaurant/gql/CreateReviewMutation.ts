import gql from 'graphql-tag'

export const CreateReviewMutation = gql`
  mutation CreateReviewMutation($createReviewInput: CreateReviewInput!) {
    createReview(createReviewInput: $createReviewInput) {
      id
    }
  }
`
