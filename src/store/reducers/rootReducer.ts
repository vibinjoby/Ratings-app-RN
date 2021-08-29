import { combineReducers } from '@reduxjs/toolkit'

import loaderReducer from './common/loader'
import toastReducer from './common/toaster'
import authReducer from './auth'
import restaurantReducer from './restaurant'

const rootReducer = combineReducers({
  toaster: toastReducer,
  loader: loaderReducer,
  auth: authReducer,
  restaurants: restaurantReducer,
})

export default rootReducer
