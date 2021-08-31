import { createSlice } from '@reduxjs/toolkit'

import { store } from '..'
import {
  createRestaurant,
  fetchOwnerRestaurantReview,
  fetchOwnerRestaurants,
  submitOwnerReply,
} from '../../network/RestaurantService'
import { apiCallBegan } from '../actions/api'
import { Review } from './restaurant'

type Restaurant = {
  is_deleted: boolean
  _id: string
  restaurant_name: string
  address: string
  contact_number: string
  email_address: string
  owner_id: string
  average_ratings: number
  reviewsCount: number
}

type RestaurantDetail = {
  restaurantData: Record<string, unknown>
  reviews: Array<Review>
}

type State = {
  restaurants: Array<Restaurant>
  restaurantDetails: RestaurantDetail
}

const slice = createSlice({
  name: 'owner',
  initialState: {
    restaurants: [],
    restaurantDetails: {
      restaurantData: {},
      reviews: [],
    },
  },
  reducers: {
    fetchMyRestaurants: (state: State, action) => {
      const { data } = action.payload
      state.restaurants = data
    },
    loadRestaurantDetail: (state: State, action) => {
      const { data } = action.payload
      const { restaurantData, reviews } = data
      state.restaurantDetails.restaurantData = restaurantData
      state.restaurantDetails.reviews = reviews
    },
    addOwnerReply: (state: State, action) => {
      let reviews = state.restaurantDetails.reviews.map((review) => {
        if (review._id === action.payload.args[2]) {
          review.owner_reply = action.payload.args[1]
        }
        return review
      })
      state.restaurantDetails.reviews = reviews
    },
    addNewRestaurant: (state: State, action) => {
      const { data } = action.payload
      state.restaurants.push(data)
    },
  },
})

export const { fetchMyRestaurants, loadRestaurantDetail, addOwnerReply, addNewRestaurant } =
  slice.actions

export default slice.reducer

export const getMyRestaurants = (token: string) => (dispatch: typeof store.dispatch) => {
  dispatch({
    type: apiCallBegan.type,
    payload: {
      apiMethod: fetchOwnerRestaurants,
      args: [token],
      onSucess: [fetchMyRestaurants],
      loader: true,
    },
  })
}

export const getOwnerRestaurantDetails =
  (token: string, restaurantId: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: fetchOwnerRestaurantReview,
        args: [token, restaurantId],
        onSucess: [loadRestaurantDetail],
        loader: true,
      },
    })
  }

export const addReply =
  (token: string, ownerReply: string, reviewId: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: submitOwnerReply,
        args: [token, ownerReply, reviewId],
        onSucess: [addOwnerReply],
        loader: true,
      },
    })
  }

export const saveRestaurant =
  (token: string, restaurantName: string, address: string, contactNumber: string, email: string) =>
  (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: createRestaurant,
        args: [token, restaurantName, address, contactNumber, email],
        onSucess: [addNewRestaurant],
        loader: true,
      },
    })
  }
