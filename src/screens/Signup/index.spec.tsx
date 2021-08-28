import 'react-native'
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import Signup from '.'

describe('Sign Up screen', () => {
  it('should render', () => {
    const { toJSON } = render(
      <NavigationContainer>
        <Signup />
      </NavigationContainer>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should let me enter values and submit', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Signup />
      </NavigationContainer>,
    )
    fireEvent.changeText(getByTestId('email'), 'Email')
    fireEvent.changeText(getByTestId('password'), 'Password')
    fireEvent.changeText(getByTestId('confirmPassword'), 'Confirm Password')
    fireEvent.press(getByTestId('signupBtn'))
  })
})
