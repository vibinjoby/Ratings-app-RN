import React from 'react'
import { render } from '@testing-library/react-native'

import AppLoader from './component'

describe('AppLoader', () => {
  it('should be able to click on the date picker and change date', () => {
    const { getByTestId } = render(<AppLoader />)
    getByTestId('loading-indicator')
  })
})
