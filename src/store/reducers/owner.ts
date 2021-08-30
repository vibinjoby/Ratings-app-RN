import { createSlice } from '@reduxjs/toolkit'

import { store } from '..'
import { fetchOwnerRestaurants } from '../../network/RestaurantService'
import { apiCallBegan } from '../actions/api'

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

type State = {
  restaurants: Array<Restaurant>
}

const slice = createSlice({
  name: 'owner',
  initialState: {
    restaurants: [],
  },
  reducers: {
    fetchMyRestaurants: (state: State, action) => {
      const { data } = action.payload
      state.restaurants = data
    },
  },
})

export const { fetchMyRestaurants } = slice.actions

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
