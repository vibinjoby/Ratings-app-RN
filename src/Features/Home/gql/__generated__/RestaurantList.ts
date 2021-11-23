/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RestaurantList
// ====================================================

export interface RestaurantList_getRestaurants_page_edges_node {
  __typename: "Restaurant";
  restaurantName: string;
  id: number;
  address: string;
  contactNumber: number;
  averageRatings: number;
}

export interface RestaurantList_getRestaurants_page_edges {
  __typename: "RestaurantEdge";
  node: RestaurantList_getRestaurants_page_edges_node | null;
}

export interface RestaurantList_getRestaurants_page_pageInfo {
  __typename: "RestaurantPageInfo";
  hasNextPage: boolean;
}

export interface RestaurantList_getRestaurants_page {
  __typename: "RestaurantConnection";
  edges: RestaurantList_getRestaurants_page_edges[] | null;
  pageInfo: RestaurantList_getRestaurants_page_pageInfo | null;
}

export interface RestaurantList_getRestaurants_pageData {
  __typename: "PageData";
  count: number;
}

export interface RestaurantList_getRestaurants {
  __typename: "RestaurantResponse";
  page: RestaurantList_getRestaurants_page;
  pageData: RestaurantList_getRestaurants_pageData | null;
}

export interface RestaurantList {
  getRestaurants: RestaurantList_getRestaurants;
}
