import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import AppLoader from './component'
import { store } from '../../store'

describe('AppLoader', () => {
  it('should render', () => {
    const { toJSON } = render(
      <NavigationContainer>
        <Provider store={store}>
          <AppLoader />
        </Provider>
      </NavigationContainer>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
