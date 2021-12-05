/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateRestaurantInput } from './../../../../../__generated__/globalTypes'

// ====================================================
// GraphQL mutation operation: CreateRestaurant
// ====================================================

export interface CreateRestaurant_createRestaurant {
  __typename: 'Restaurant'
  id: number
}

export interface CreateRestaurant {
  createRestaurant: CreateRestaurant_createRestaurant
}

export interface CreateRestaurantVariables {
  createRestaurantInput: CreateRestaurantInput
}
