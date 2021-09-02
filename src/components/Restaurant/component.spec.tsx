import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import Restaurant from './component'

describe('Restaurant', () => {
  it('should render', () => {
    const { toJSON } = render(
      <Restaurant
        restaurantName="California Roll"
        ratings={4.5}
        reviewsCount={15}
        onPress={() => console.log('pressed')}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
