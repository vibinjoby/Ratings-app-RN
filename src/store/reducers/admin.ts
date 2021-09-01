import { createSlice } from '@reduxjs/toolkit'

import { store } from '..'
import {
  authenticateAdmin,
  fetchAllRestaurants,
  fetchAllReviews,
  fetchAllUsers,
  deleteRestaurant,
  deleteReview,
  deleteUser,
} from '../../network/AdminService'
import { decodeToken } from '../../utilities/helpers'
import { apiCallBegan } from '../actions/api'

type State = {
  token: string
  users: Array<any>
  reviews: Array<any>
  restaurants: Array<any>
}

const slice = createSlice({
  name: 'admin',
  initialState: {
    token: '',
    users: [],
    reviews: [],
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
      state.reviews = data.filter((item: any) => !item.is_deleted)
    },
    removeReview: (state: State, action) => {
      const id = action.payload.args[1]
      state.reviews = state.reviews.filter((review) => review._id !== id)
    },
    removeRestaurant: (state: State, action) => {
      const id = action.payload.args[1]
      state.restaurants = state.restaurants.filter((restaurant) => restaurant._id !== id)
    },
    removeUser: (state: State, action) => {
      const id = action.payload.args[1]
      state.users = state.users.filter((user) => user._id !== id)
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

export const getAllReviews = (token: string) => (dispatch: typeof store.dispatch) => {
  dispatch({
    type: apiCallBegan.type,
    payload: {
      apiMethod: fetchAllReviews,
      args: [token],
      onSucess: [loadAllReviews],
      loader: true,
    },
  })
}

export const filterReview =
  (token: string, reviewId: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: deleteReview,
        args: [token, reviewId],
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
