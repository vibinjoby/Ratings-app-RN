import 'react-native'
import React from 'react'
import AllUsers from '.'

import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('AllUsers', () => {
  it('should render', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <AllUsers />
        </Provider>
      </NavigationContainer>,
    )
  })
})
