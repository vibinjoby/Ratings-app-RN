import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useRoute } from '@react-navigation/native'

import { ScreenNames } from './constants'
import RestaurantDetails from './containers/RestaurantDetails'
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
    </Stack.Navigator>
  )
}

export default RestaurantDetailsNav
