import 'react-native'
import React from 'react'
import AppNoInternet from './component'

import { render } from '@testing-library/react-native'

describe('AppNoInternet', () => {
  it('should render', () => {
    render(<AppNoInternet />)
  })
})
