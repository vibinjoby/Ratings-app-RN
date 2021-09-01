import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import RestaurantDetails from '.'
import { store } from '../../store'
import { Provider } from 'react-redux'

describe('RestaurantDetails', () => {
  it('should render', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <RestaurantDetails />
        </Provider>
      </NavigationContainer>,
    )
  })
})
