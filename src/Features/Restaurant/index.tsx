import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useRoute } from '@react-navigation/native'

import RestaurantDetails from './containers/RestaurantDetails'
import AddReview from './containers/AddReview'
import { ScreenNames } from './constants'
import { DetailsRouteProps } from './types'

const RestaurantDetailsNav = () => {
  const route = useRoute<DetailsRouteProps>()
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ScreenNames.DETAILS}
        component={RestaurantDetails}
        initialParams={{ restaurantId: route.params.restaurantId }}
      />
      <Stack.Screen
        name={ScreenNames.ADD_REVIEW}
        component={AddReview}
        initialParams={{ restaurantId: route.params.restaurantId }}
      />
    </Stack.Navigator>
  )
}

export default RestaurantDetailsNav
