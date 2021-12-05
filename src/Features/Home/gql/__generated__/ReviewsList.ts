/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReviewsList
// ====================================================

export interface ReviewsList_findReviewsByRestaurantId_restaurant_reviews_user {
  __typename: 'User'
  id: number
}

export interface ReviewsList_findReviewsByRestaurantId_restaurant_reviews {
  __typename: 'Review'
  id: number
  user: ReviewsList_findReviewsByRestaurantId_restaurant_reviews_user
}

export interface ReviewsList_findReviewsByRestaurantId_restaurant {
  __typename: 'Restaurant'
  restaurantName: string
  reviews: ReviewsList_findReviewsByRestaurantId_restaurant_reviews[] | null
}

export interface ReviewsList_findReviewsByRestaurantId_user_reviews {
  __typename: 'Review'
  id: number
}

export interface ReviewsList_findReviewsByRestaurantId_user_restaurants {
  __typename: 'Restaurant'
  id: number
}

export interface ReviewsList_findReviewsByRestaurantId_user {
  __typename: 'User'
  id: number
  fullName: string
  reviews: ReviewsList_findReviewsByRestaurantId_user_reviews[] | null
  restaurants: ReviewsList_findReviewsByRestaurantId_user_restaurants[] | null
}

export interface ReviewsList_findReviewsByRestaurantId {
  __typename: 'Review'
  id: number
  comments: string
  visitDate: any
  ownerReply: string | null
  ratings: number
  restaurant: ReviewsList_findReviewsByRestaurantId_restaurant
  user: ReviewsList_findReviewsByRestaurantId_user
}

export interface ReviewsList {
  findReviewsByRestaurantId: ReviewsList_findReviewsByRestaurantId[]
}

export interface ReviewsListVariables {
  restaurantId: number
}
