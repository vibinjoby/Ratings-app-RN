import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import EmptyRestaurantDetailView from '../components/EmptyRestaurantDetailView'
import RestaurantDetailView from '../components/RestaurantDetailView'

const RestaurantDetails = () => {
  return <RestaurantDetailView restaurantData={{}} />
}

export default RestaurantDetails
