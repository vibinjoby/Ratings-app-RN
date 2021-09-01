import 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import AddReview from '.'
import { store } from '../../store'

describe('AddReview', () => {
  it('should render', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <AddReview />
        </Provider>
      </NavigationContainer>,
    )
  })
})
