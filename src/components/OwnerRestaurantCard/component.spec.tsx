import 'react-native'
import React from 'react'
import OwnerRestaurantCard from './component'

import { render } from '@testing-library/react-native'

describe('OwnerRestaurantCard', () => {
  it('should render', () => {
    render(
      <OwnerRestaurantCard
        title={'Moxies Grill & Bar'}
        ratings={4.5}
        reviewsCount={4}
        onPress={() => console.log('pressed')}
      />,
    )
  })
})
