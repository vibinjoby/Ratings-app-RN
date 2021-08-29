import 'react-native'
import React from 'react'
import AppToasts from './component'

import { render } from '@testing-library/react-native'

describe('AppToasts', () => {
  it('should render', () => {
    render(<AppToasts />)
  })
})
