import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

import {
  getRestaurants,
  fetchRestaurantDetail,
  submitRatings,
} from '../../network/RestaurantService'
import { apiCallBegan } from '../actions/api'
import { store } from '../index'

export type Restaurant = {
  _id: string /* eslint-disable camelcase */
  restaurant_name: string /* eslint-disable camelcase */
  average_ratings: number /* eslint-disable camelcase */
  reviewsCount?: number
  reviews?: Array<Review>
}

export type Review = {
  _id: string
  comments: string
  visit_date: string /* eslint-disable camelcase */
  ratings: number
  rated_user_id: {
    /* eslint-disable camelcase */ _id: string
    fullName: string
  }
  owner_reply?: string
}

type RestaurantDetail = {
  highestRatedReview: Review
  lowestRatedReview: Review
  latestReviews: Array<Review>
  restaurantData: Restaurant
  hasUserRated: boolean
}

type State = {
  restaurants: Array<Restaurant>
  totalRestaurants: number
  restaurantDetails: RestaurantDetail
}

const initialState = {
  restaurants: [],
  restaurantDetails: {
    highestRatedReview: {
      _id: '',
      comments: '',
      rated_user_id: { _id: '', fullName: '' },
      ratings: 0,
      visit_date: '',
      owner_reply: '',
    },
    lowestRatedReview: {
      _id: '',
      comments: '',
      rated_user_id: { _id: '', fullName: '' },
      ratings: 0,
      visit_date: '',
      owner_reply: '',
    },
    latestReviews: [],
    restaurantData: {
      _id: '',
      address: '',
      average_ratings: 0,
      restaurant_name: '',
    },
    hasUserRated: false,
  },
  totalRestaurants: 0,
}

const slice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    loadAllRestaurants: (state: State, action) => {
      const { data } = action.payload
      state.restaurants = [...state.restaurants, ...data.data]
      state.totalRestaurants = data.totalCount
    },
    loadRestaurantDetail: (state: State, action) => {
      const { data } = action.payload
      state.restaurantDetails = data
    },
    addReview: (state: State, action) => {
      const { data } = action.payload
      state.restaurantDetails.latestReviews.unshift(data.review)
      state.restaurantDetails.hasUserRated = true

      if (!state.restaurantDetails.lowestRatedReview && data.review.ratings < 3) {
        state.restaurantDetails.lowestRatedReview = data.review
      } else if (!state.restaurantDetails.highestRatedReview && data.review.ratings >= 3) {
        state.restaurantDetails.highestRatedReview = data.review
      }
    },
    resetRestaurantData: (state: State) => {
      state.restaurants = []
    },
    sortRestaurants: (state: State, action) => {
      const { sortBy } = action.payload
      // Ascending
      if (sortBy === 1) {
        state.restaurants = _.sortBy(state.restaurants, 'average_ratings')
      } else {
        state.restaurants = _.sortBy(state.restaurants, 'average_ratings').reverse()
      }
    },
  },
})

export const {
  loadAllRestaurants,
  loadRestaurantDetail,
  addReview,
  resetRestaurantData,
  sortRestaurants,
} = slice.actions

export default slice.reducer

export const fetchRestaurants =
  (token: string, pageNumber: number) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: getRestaurants,
        args: [token, pageNumber],
        onSucess: [loadAllRestaurants.type],
        loader: false,
      },
    })
  }

export const getRestaurantDetail =
  (token: string, restaurantId: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: fetchRestaurantDetail,
        args: [token, restaurantId],
        onSucess: [loadRestaurantDetail.type],
        loader: true,
      },
    })
  }

export const submitReview =
  (token: string, restaurantId: string, ratings: number, visitDate: string, comments: string) =>
  (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: submitRatings,
        args: [token, restaurantId, ratings, visitDate, comments],
        onSucess: [addReview],
        loader: true,
      },
    })
  }