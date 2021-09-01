import 'react-native'
import React from 'react'
import AddRestaurant from '.'

import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('AddRestaurant', () => {
  it('should render', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <AddRestaurant />
        </Provider>
      </NavigationContainer>,
    )
  })
})
