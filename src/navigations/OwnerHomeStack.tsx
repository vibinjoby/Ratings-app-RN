import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import routes from './routes'
import OwnerHome from '../screens/OwnerHome'

const OwnerHomeStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.OWNER_HOME} component={OwnerHome} />
    </Stack.Navigator>
  )
}

export default OwnerHomeStack
