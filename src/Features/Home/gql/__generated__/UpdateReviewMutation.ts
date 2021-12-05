/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateReviewInput } from './../../../../../__generated__/globalTypes'

// ====================================================
// GraphQL mutation operation: UpdateReviewMutation
// ====================================================

export interface UpdateReviewMutation_updateReview {
  __typename: 'Review'
  id: number
  comments: string
  ownerReply: string | null
  visitDate: any
  ratings: number
}

export interface UpdateReviewMutation {
  updateReview: UpdateReviewMutation_updateReview
}

export interface UpdateReviewMutationVariables {
  updateReviewInput: UpdateReviewInput
}
