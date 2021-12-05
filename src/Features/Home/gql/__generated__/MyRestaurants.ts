/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyRestaurants
// ====================================================

export interface MyRestaurants_getOwnedrestaurants_reviews {
  __typename: 'Review'
  id: number
  ratings: number
  comments: string
}

export interface MyRestaurants_getOwnedrestaurants {
  __typename: 'Restaurant'
  id: number
  restaurantName: string
  address: string
  averageRatings: number
  reviews: MyRestaurants_getOwnedrestaurants_reviews[] | null
}

export interface MyRestaurants {
  getOwnedrestaurants: MyRestaurants_getOwnedrestaurants[]
}
