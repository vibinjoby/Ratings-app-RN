/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveReviewReplyMutation
// ====================================================

export interface SaveReviewReplyMutation_createOwnerReply {
  __typename: "Review";
  id: number;
}

export interface SaveReviewReplyMutation {
  createOwnerReply: SaveReviewReplyMutation_createOwnerReply;
}

export interface SaveReviewReplyMutationVariables {
  reviewId: number;
  ownerReply: string;
}
