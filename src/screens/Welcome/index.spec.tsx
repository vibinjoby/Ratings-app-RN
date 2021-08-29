import 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { render } from '@testing-library/react-native'

import Welcome from '.'
import WrapComponent from '../../../tests/wrapComponent'

describe('Welcome', () => {
  beforeEach(() => {
    render(<NavigationContainer>{WrapComponent(Welcome)}</NavigationContainer>)
  })

  it('should render', () => {
    render(<NavigationContainer>{WrapComponent(Welcome)}</NavigationContainer>)
  })
})
