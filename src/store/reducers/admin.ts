import { createSlice } from '@reduxjs/toolkit'

import { store } from '..'
import {
  authenticateAdmin,
  fetchAllRestaurants,
  fetchAllUsers,
  deleteRestaurant,
  deleteReview,
  deleteUser,
  editRestaurantReview,
} from '../../network/AdminService'
import { fetchOwnerRestaurantReview } from '../../network/RestaurantService'
import { decodeToken } from '../../utilities/helpers'
import { apiCallBegan } from '../actions/api'
import { Restaurant } from './restaurant'

type State = {
  token: string
  users: Array<any>
  restaurants: Array<Restaurant>
}

const slice = createSlice({
  name: 'admin',
  initialState: {
    token: '',
    users: [],
    restaurants: [],
  },
  reducers: {
    loadAdminInfo: (state: State, action) => {
      const { token } = action.payload
      state.token = token
    },
    loginAdmin: (state: State, action) => {
      const { data } = action.payload
      state.token = data.token
      decodeToken(data.token, true)
    },
    loadAllUsers: (state: State, action) => {
      const { data } = action.payload
      state.users = data.filter((item: any) => !item.is_deleted)
    },
    loadAllRestaurants: (state: State, action) => {
      const { data } = action.payload
      state.restaurants = data.filter((item: any) => !item.is_deleted)
    },
    loadAllReviews: (state: State, action) => {
      const { data } = action.payload
      const { reviews } = data
      const id = action.payload.args[1]
      state.restaurants
        .filter((restaurant) => restaurant._id === id)
        .map((restaurant) => (restaurant.reviews = reviews))
    },
    removeReview: (state: State, action) => {
      const id = action.payload.args[1]
      const restaurantId = action.payload.args[2]
      const restaurants = state.restaurants.find((restaurant) => restaurant._id === restaurantId)
      const reviews = state.restaurants.find(
        (restaurant) => restaurant._id === restaurantId,
      )?.reviews

      if (restaurants && restaurants.reviews) {
        restaurants.reviews = reviews?.filter((review) => review._id !== id)
      }
    },
    removeRestaurant: (state: State, action) => {
      const id = action.payload.args[1]
      state.restaurants = state.restaurants.filter((restaurant) => restaurant._id !== id)
    },
    removeUser: (state: State, action) => {
      const id = action.payload.args[1]
      state.users = state.users.filter((user) => user._id !== id)
    },
    removeToken: (state: State) => {
      state.token = ''
    },
    updateReview: (state: State, action) => {
      const { data } = action.payload
      state.restaurants
        .find((restaurant) => restaurant._id === data.restaurant_id)
        ?.reviews?.map((review) => {
          if (review._id === data._id) {
            review.comments = data.comments
            review.owner_reply = data.owner_reply
            review.ratings = data.ratings
          }
          return review
        })
    },
  },
})

export const {
  loadAdminInfo,
  loginAdmin,
  loadAllUsers,
  loadAllRestaurants,
  loadAllReviews,
  removeReview,
  removeRestaurant,
  removeUser,
  removeToken,
  updateReview,
} = slice.actions

export default slice.reducer

export const loginUserAdmin =
  (username: string, password: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: authenticateAdmin,
        args: [username, password],
        onSucess: [loginAdmin],
        loader: true,
      },
    })
  }

export const getAllUsers = (token: string) => (dispatch: typeof store.dispatch) => {
  dispatch({
    type: apiCallBegan.type,
    payload: {
      apiMethod: fetchAllUsers,
      args: [token],
      onSucess: [loadAllUsers],
      loader: true,
    },
  })
}

export const getAllRestaurants = (token: string) => (dispatch: typeof store.dispatch) => {
  dispatch({
    type: apiCallBegan.type,
    payload: {
      apiMethod: fetchAllRestaurants,
      args: [token],
      onSucess: [loadAllRestaurants],
      loader: true,
    },
  })
}

export const getAllReviews =
  (token: string, restaurantId: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: fetchOwnerRestaurantReview,
        args: [token, restaurantId],
        onSucess: [loadAllReviews],
        loader: true,
      },
    })
  }

export const filterReview =
  (token: string, reviewId: string, restaurantId: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: deleteReview,
        args: [token, reviewId, restaurantId],
        onSucess: [removeReview],
        loader: true,
      },
    })
  }

export const filterRestaurant =
  (token: string, restaurantId: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: deleteRestaurant,
        args: [token, restaurantId],
        onSucess: [removeRestaurant],
        loader: true,
      },
    })
  }

export const filterUser = (token: string, userId: string) => (dispatch: typeof store.dispatch) => {
  dispatch({
    type: apiCallBegan.type,
    payload: {
      apiMethod: deleteUser,
      args: [token, userId],
      onSucess: [removeUser],
      loader: true,
    },
  })
}

export const modifyReview =
  (
    token: string,
    reviewId: string,
    customerResponse?: string,
    ownerResponse?: string,
    stars?: number,
  ) =>
  (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: editRestaurantReview,
        args: [token, reviewId, customerResponse, ownerResponse, stars],
        onSucess: [updateReview],
        loader: false,
      },
    })
  }
