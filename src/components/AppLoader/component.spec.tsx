import 'react-native'
import React from 'react'
import AppLoader from './component'

import { render } from '@testing-library/react-native'

describe('AppLoader', () => {
  it('should render', () => {
    render(<AppLoader />)
  })
})
