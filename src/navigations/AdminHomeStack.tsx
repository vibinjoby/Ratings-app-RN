import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import routes from './routes'
import AdminHome from '../screens/AdminHome'
import AllUsers from '../screens/AllUsers'

const AdminHomeStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name={routes.ADMIN_HOME} component={AdminHome} />
      <Stack.Screen name={routes.ALL_USERS} component={AllUsers} />
    </Stack.Navigator>
  )
}

export default AdminHomeStack
