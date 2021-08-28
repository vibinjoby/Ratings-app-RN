import 'react-native'
import React from 'react'
import RestaurantCard from './component'

import { render } from '@testing-library/react-native'

describe('RestaurantCard', () => {
  const mockFn = jest.fn()

  it('should render', () => {
    render(
      <RestaurantCard
        title="Joes Pizzeria"
        restaurantImg={require('../../assets/dummy-restaurant-pic.png')}
        ratings={4.4}
        reviewCount={84}
        onPress={mockFn}
      />,
    )
  })
})
