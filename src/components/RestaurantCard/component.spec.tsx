import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import RestaurantCard from './component'

describe('RestaurantCard', () => {
  it('should render', () => {
    render(
      <NavigationContainer>
        <RestaurantCard
          id={'123'}
          title="Joes Pizzeria"
          restaurantImg={require('../../assets/dummy-restaurant-pic.png')}
          ratings={4.4}
          reviewCount={84}
        />
      </NavigationContainer>,
    )
  })
})
