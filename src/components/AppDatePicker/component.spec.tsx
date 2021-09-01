import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import AppDatePicker from './component'

describe('AppDatePicker', () => {
  it('should render', () => {
    const { toJSON } = render(<AppDatePicker />)
    expect(toJSON()).toMatchSnapshot()
  })
})
