import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import Welcome from '.'
import { store } from '../../store'

storiesOf('Screens', module).add('Welcome', () => (
  <NavigationContainer>
    <Provider store={store}>
      <Welcome />
    </Provider>
  </NavigationContainer>
))
