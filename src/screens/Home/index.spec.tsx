import 'react-native'
import React from 'react'
import Home from '.'

import { render } from '@testing-library/react-native'

describe('Home', () => {
  it('should render', () => {
    render(<Home />)
  })
})
