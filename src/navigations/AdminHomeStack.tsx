import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import routes from './routes'
import AuthStack from './AuthStack'
import AdminHome from '../screens/AdminHome'

const AdminHomeStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.ADMIN_HOME} component={AdminHome} />
    </Stack.Navigator>
  )
}

export default AdminHomeStack
