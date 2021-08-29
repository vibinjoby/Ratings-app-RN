import 'react-native'
import React from 'react'
import AppDatePicker from './component'

import { render } from '@testing-library/react-native'

describe('AppDatePicker', () => {
  it('should render', () => {
    render(<AppDatePicker />)
  })
})
