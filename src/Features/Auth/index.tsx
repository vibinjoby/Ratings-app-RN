import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './Welcome/containers'
import SignIn from './Signin/containers'
import SignUp from './Signup/containers'
import { ScreenNames } from './constants'
import { ScreenNames as HomeScreenNames } from '../../BaseModule/constants'

import HomeStack from '../Home'

const AuthStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.WELCOME} component={Welcome} />
      <Stack.Screen name={ScreenNames.LOGIN} component={SignIn} />
      <Stack.Screen name={ScreenNames.SIGNUP} component={SignUp} />
      <Stack.Screen name={HomeScreenNames.HOME_STACK} component={HomeStack} />
    </Stack.Navigator>
  )
}

export default AuthStack
