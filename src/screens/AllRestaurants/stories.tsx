import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import AllRestaurants from '.'
import { store } from '../../store'

storiesOf('Screens', module).add('AllRestaurants', () => (
  <NavigationContainer>
    <Provider store={store}>
      <AllRestaurants />
    </Provider>
  </NavigationContainer>
))
