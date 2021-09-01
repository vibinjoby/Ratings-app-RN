import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import AppToasts from './component'
import { store } from '../../store'

describe('AppToasts', () => {
  it('should render', () => {
    const { toJSON } = render(
      <NavigationContainer>
        <Provider store={store}>
          <AppToasts />
        </Provider>
      </NavigationContainer>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
