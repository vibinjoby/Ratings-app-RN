import React from 'react'
import { storiesOf } from '@storybook/react-native'

import SignUp from '.'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { NavigationContainer } from '@react-navigation/native'

storiesOf('Screens', module).add('Signup', () => (
  <NavigationContainer>
    <Provider store={store}>
      <SignUp />
    </Provider>
  </NavigationContainer>
))
