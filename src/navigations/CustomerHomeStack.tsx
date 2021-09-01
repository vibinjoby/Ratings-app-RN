import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import routes from './routes'
import Home from '../screens/Home'
import RestaurantDetails from '../screens/RestaurantDetails'
import AddReview from '../screens/AddReview'

const CustomerHomeStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.CUSTOMER_HOME} component={Home} options={{ headerShown: true }} />
      <Stack.Screen
        name={routes.RESTAURANT_DETAILS}
        component={RestaurantDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.ADD_REVIEW}
        component={AddReview}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  )
}

export default CustomerHomeStack
