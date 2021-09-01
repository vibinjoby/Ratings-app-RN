import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import AdminHome from '.'
import { store } from '../../store'

describe('AdminHome', () => {
  it('should render', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <AdminHome />
        </Provider>
      </NavigationContainer>,
    )
  })
})
