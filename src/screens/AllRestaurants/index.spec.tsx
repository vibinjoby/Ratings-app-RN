import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import AllRestaurants from '.'
import { store } from '../../store'

describe('AllRestaurants', () => {
  it('should render', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <AllRestaurants />
        </Provider>
      </NavigationContainer>,
    )
  })
})
