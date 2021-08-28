import { combineReducers } from '@reduxjs/toolkit'

import loaderReducer from './common/loader'
import toastReducer from './common/toaster'
import authReducer from './auth'

const rootReducer = combineReducers({
  toaster: toastReducer,
  loader: loaderReducer,
  auth: authReducer,
})

export default rootReducer
