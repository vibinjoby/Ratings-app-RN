import 'react-native'
import React from 'react'
import ReviewBlock from './component'

import { render } from '@testing-library/react-native'

describe('ReviewBlock', () => {
  it('should render', () => {
    render(
      <ReviewBlock
        reviewId="123"
        reviewerName="Vibin"
        comments="This is not too bad at all"
        ratings={3}
        visitDate="20 Jun 2021"
      />,
    )
  })
})
