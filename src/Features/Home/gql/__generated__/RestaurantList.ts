/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RestaurantList
// ====================================================

export interface RestaurantList_getRestaurants_edges_node {
  __typename: 'Restaurant'
  restaurantName: string
  id: number
  address: string
  contactNumber: number
  averageRatings: number
  reviewsCount: number
}

export interface RestaurantList_getRestaurants_edges {
  __typename: 'RestaurantEdge'
  node: RestaurantList_getRestaurants_edges_node | null
}

export interface RestaurantList_getRestaurants_pageInfo {
  __typename: 'RestaurantPageInfo'
  hasNextPage: boolean
  endCursor: string | null
}

export interface RestaurantList_getRestaurants {
  __typename: 'RestaurantResponse'
  edges: RestaurantList_getRestaurants_edges[] | null
  pageInfo: RestaurantList_getRestaurants_pageInfo | null
}

export interface RestaurantList {
  getRestaurants: RestaurantList_getRestaurants
}

export interface RestaurantListVariables {
  first?: number | null
  offset?: number | null
}
