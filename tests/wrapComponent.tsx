import { configureStore, Store } from '@reduxjs/toolkit'
import React, { ComponentType, ReactElement } from 'react'
import { Provider } from 'react-redux'
import reducer from '../src/store/reducers/rootReducer'

export const makeStore = (): Store => {
  return configureStore({ reducer })
}

const wrapComponent = (
  Component: ComponentType,
  store: Store | null = null,
  props = {},
): ReactElement => {
  return (
    <Provider store={store || makeStore()}>
      <Component {...props} />
    </Provider>
  )
}

export default wrapComponent
