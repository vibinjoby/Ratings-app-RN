import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import AllUsers from '.'
import { store } from '../../store'

storiesOf('Screens', module).add('AllUsers', () => (
  <NavigationContainer>
    <Provider store={store}>
      <AllUsers />
    </Provider>
  </NavigationContainer>
))
