import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import ReviewBlock from './component'

describe('ReviewBlock', () => {
  it('should render', () => {
    const { toJSON } = render(
      <ReviewBlock
        reviewId="123"
        reviewerName="Vibin"
        comments="This is not too bad at all"
        ratings={3}
        visitDate="20 Jun 2021"
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
