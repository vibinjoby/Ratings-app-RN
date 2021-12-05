/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateReviewInput } from './../../../../../__generated__/globalTypes'

// ====================================================
// GraphQL mutation operation: CreateReviewMutation
// ====================================================

export interface CreateReviewMutation_createReview {
  __typename: 'Review'
  id: number
}

export interface CreateReviewMutation {
  createReview: CreateReviewMutation_createReview
}

export interface CreateReviewMutationVariables {
  createReviewInput: CreateReviewInput
}
