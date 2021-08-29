import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import Home from '.'
import WrapComponent from '../../../tests/wrapComponent'

describe('Home', () => {
  it('should render', () => {
    beforeEach(() => {
      render(<NavigationContainer>{WrapComponent(Home)}</NavigationContainer>)
    })
  })
})
