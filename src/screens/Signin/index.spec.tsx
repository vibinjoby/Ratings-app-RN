import 'react-native'
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import SignIn from '.'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('Sign In screen', () => {
  it('should render', () => {
    const { toJSON } = render(
      <NavigationContainer>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </NavigationContainer>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should let me enter values', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </NavigationContainer>,
    )
    fireEvent.changeText(getByTestId('email'), 'Email')
    fireEvent.changeText(getByTestId('password'), 'Password')
    fireEvent.press(getByTestId('signinBtn'))
  })
})
