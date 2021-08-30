import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import routes from './routes'
import Welcome from '../screens/Welcome'
import SignIn from '../screens/Signin'
import SignUp from '../screens/Signup'
import CustomerHomeStack from './CustomerHomeStack'
import OwnerHomeStack from './OwnerHomeStack'
import AdminHomeStack from './AdminHomeStack'

const AuthStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.WELCOME} component={Welcome} />
      <Stack.Screen name={routes.LOGIN} component={SignIn} />
      <Stack.Screen name={routes.SIGNUP} component={SignUp} />
      <Stack.Screen name={routes.CUSTOMER_HOME_STACK} component={CustomerHomeStack} />
      <Stack.Screen name={routes.OWNER_HOME_STACK} component={OwnerHomeStack} />
      <Stack.Screen name={routes.ADMIN_HOME_STACK} component={AdminHomeStack} />
    </Stack.Navigator>
  )
}

export default AuthStack
