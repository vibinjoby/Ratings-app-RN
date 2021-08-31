import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import routes from './routes'
import OwnerHome from '../screens/OwnerHome'
import OwnerReviewDetail from '../screens/OwnerReviewDetail'
import AddRestaurant from '../screens/AddRestaurant'

const OwnerHomeStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.OWNER_HOME} component={OwnerHome} />
      <Stack.Screen
        name={routes.ADD_RESTAURANT}
        component={AddRestaurant}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen name={routes.OWNER_REVIEW_DETAILS} component={OwnerReviewDetail} />
    </Stack.Navigator>
  )
}

export default OwnerHomeStack
