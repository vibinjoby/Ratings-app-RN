import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './Welcome/containers'
import SignIn from './Signin/containers'
import SignUp from './Signup/containers'
/* import CustomerHomeStack from './CustomerHomeStack'
import OwnerHomeStack from './OwnerHomeStack'
import AdminHomeStack from './AdminHomeStack' */
import { ScreenNames } from './constants'

const AuthStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.WELCOME} component={Welcome} />
      <Stack.Screen name={ScreenNames.LOGIN} component={SignIn} />
      <Stack.Screen name={ScreenNames.SIGNUP} component={SignUp} />
      {/* <Stack.Screen name={routes.CUSTOMER_HOME_STACK} component={CustomerHomeStack} />
      <Stack.Screen name={routes.OWNER_HOME_STACK} component={OwnerHomeStack} />
      <Stack.Screen name={routes.ADMIN_HOME_STACK} component={AdminHomeStack} /> */}
    </Stack.Navigator>
  )
}

export default AuthStack
