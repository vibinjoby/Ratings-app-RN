import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiCallBegan } from './actions/api'

import api from './middleware/api'
import rootReducer from './reducers/rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [apiCallBegan.type],
      },
    }),
    api,
  ],
})

// Infer the `RootState` from the store itself
export type RootState = ReturnType<typeof store.getState>
