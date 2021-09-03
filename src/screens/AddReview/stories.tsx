import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import AddReview from '.'
import { store } from '../../store'

storiesOf('Screens', module).add('AddReview', () => (
  <NavigationContainer>
    <Provider store={store}>
      <AddReview />
    </Provider>
  </NavigationContainer>
))
