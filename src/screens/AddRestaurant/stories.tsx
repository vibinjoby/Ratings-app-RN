import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import AddRestaurant from '.'
import { store } from '../../store'

storiesOf('Screens', module).add('AddRestaurant', () => (
  <NavigationContainer>
    <Provider store={store}>
      <AddRestaurant />
    </Provider>
  </NavigationContainer>
))
