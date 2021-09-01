import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import OwnerRestaurantCard from './component'

describe('OwnerRestaurantCard', () => {
  it('should render', () => {
    const { toJSON } = render(
      <OwnerRestaurantCard
        title={'Moxies Grill & Bar'}
        ratings={4.5}
        reviewsCount={4}
        onPress={() => console.log('pressed')}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
