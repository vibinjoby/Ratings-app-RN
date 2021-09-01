import { combineReducers } from '@reduxjs/toolkit'

import loaderReducer from './common/loader'
import toastReducer from './common/toaster'
import authReducer from './auth'
import restaurantReducer from './restaurant'
import ownerReducer from './owner'
import adminReducer from './admin'

const rootReducer = combineReducers({
  toaster: toastReducer,
  loader: loaderReducer,
  auth: authReducer,
  restaurants: restaurantReducer,
  owner: ownerReducer,
  admin: adminReducer,
})

export default rootReducer
