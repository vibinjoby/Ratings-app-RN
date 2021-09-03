import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import SignIn from '.'
import { store } from '../../store'

storiesOf('Screens', module).add('Signin', () => (
  <NavigationContainer>
    <Provider store={store}>
      <SignIn />
    </Provider>
  </NavigationContainer>
))
