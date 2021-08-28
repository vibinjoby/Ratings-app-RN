import 'react-native'
import React from 'react'
import Welcome from '.'

import { render } from '@testing-library/react-native'

describe('Welcome', () => {
  it('should render', () => {
    render(<Welcome />)
  })
})
