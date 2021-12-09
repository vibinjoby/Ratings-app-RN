/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RestaurantDetails
// ====================================================

export interface RestaurantDetails_getRestaurant_reviews_user {
  __typename: 'User'
  fullName: string
}

export interface RestaurantDetails_getRestaurant_reviews {
  __typename: 'Review'
  id: number
  comments: string
  ratings: number
  ownerReply: string | null
  visitDate: any
  user: RestaurantDetails_getRestaurant_reviews_user
}

export interface RestaurantDetails_getRestaurant_highestRatedReviews_user {
  __typename: 'User'
  fullName: string
}

export interface RestaurantDetails_getRestaurant_highestRatedReviews {
  __typename: 'Review'
  id: number
  comments: string
  ratings: number
  ownerReply: string | null
  visitDate: any
  user: RestaurantDetails_getRestaurant_highestRatedReviews_user
}

export interface RestaurantDetails_getRestaurant_lowestRatedReviews_user {
  __typename: 'User'
  fullName: string
}

export interface RestaurantDetails_getRestaurant_lowestRatedReviews {
  __typename: 'Review'
  id: number
  comments: string
  ratings: number
  ownerReply: string | null
  visitDate: any
  user: RestaurantDetails_getRestaurant_lowestRatedReviews_user
}

export interface RestaurantDetails_getRestaurant {
  __typename: 'Restaurant'
  restaurantName: string
  averageRatings: number
  reviews: RestaurantDetails_getRestaurant_reviews[] | null
  highestRatedReviews: RestaurantDetails_getRestaurant_highestRatedReviews[] | null
  lowestRatedReviews: RestaurantDetails_getRestaurant_lowestRatedReviews[] | null
}

export interface RestaurantDetails {
  getRestaurant: RestaurantDetails_getRestaurant
}

export interface RestaurantDetailsVariables {
  id: number
}
