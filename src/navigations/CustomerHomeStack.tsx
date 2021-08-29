import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import routes from './routes'
import Home from '../screens/Home'
import RestaurantDetails from '../screens/RestaurantDetails'

const CustomerHomeStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.CUSTOMER_HOME} component={Home} />
      <Stack.Screen
        name={routes.RESTAURANT_DETAILS}
        component={RestaurantDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default CustomerHomeStack
