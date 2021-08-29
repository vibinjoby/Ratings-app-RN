import 'react-native'
import React from 'react'
import AddReview from '.'

import { render } from '@testing-library/react-native'

describe('AddReview', () => {
  it('should render', () => {
    render(<AddReview />)
  })
})
