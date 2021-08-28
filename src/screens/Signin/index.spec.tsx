import 'react-native'
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import SignIn from '.'
import { NavigationContainer } from '@react-navigation/native'

describe('Sign In screen', () => {
  it('should render', () => {
    const { toJSON } = render(
      <NavigationContainer>
        <SignIn />
      </NavigationContainer>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should let me enter values', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <SignIn />
      </NavigationContainer>,
    )
    fireEvent.changeText(getByTestId('email'), 'Email')
    fireEvent.changeText(getByTestId('password'), 'Password')
    fireEvent.press(getByTestId('signinBtn'))
  })
})
