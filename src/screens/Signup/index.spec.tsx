import 'react-native'
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import Signup from '.'
import WrapComponent from '../../../tests/wrapComponent'

describe('Sign Up screen', () => {
  beforeEach(() => {
    render(<NavigationContainer>{WrapComponent(Signup)}</NavigationContainer>)
  })

  it('should render', () => {
    const { toJSON } = render(<NavigationContainer>{WrapComponent(Signup)}</NavigationContainer>)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should let me enter values and submit', () => {
    const { getByTestId } = render(
      <NavigationContainer>{WrapComponent(Signup)}</NavigationContainer>,
    )
    fireEvent.changeText(getByTestId('email'), 'Email')
    fireEvent.changeText(getByTestId('password'), 'Password')
    fireEvent.changeText(getByTestId('confirmPassword'), 'Confirm Password')
    fireEvent.press(getByTestId('signupBtn'))
  })
})
