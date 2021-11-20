import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ScreenNames } from './constants'
import { ScreenNames as HomeScreenNames } from '../Features/Home/constants'
import HomeStack from '../Features/Home'
import AuthStack from '../Features/Auth'
import { getData } from '../utilities/helpers'
import { UserType } from '../../__generated__/globalTypes'
import userInfoVars from '../store'

const BaseModule = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<number | boolean>(0)
  const [initialRouteParams, setInitialRoute] = useState('')
  const Stack = createStackNavigator()

  useEffect(() => {
    // Check if the user has already logged in,
    // If so navigate him to the appropriate home page based on userType
    ;(async () => {
      const data = await getData('userInfo')
      // Save the info to cache
      userInfoVars({ ...data })

      if (!data || !data.token) {
        return setIsLoggedIn(false)
      }
      setInitialRoute(
        data.userInfo.userType === UserType.customer
          ? HomeScreenNames.CUSTOMER_HOME
          : data.userInfo.userType === UserType.owner
          ? HomeScreenNames.OWNER_HOME
          : HomeScreenNames.ADMIN_HOME,
      )
      setIsLoggedIn(true)
    })()
  }, [])

  if (isLoggedIn === 0) return <></>

  if (!isLoggedIn)
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.AUTH_STACK} component={AuthStack} />
      </Stack.Navigator>
    )

  if (isLoggedIn)
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={ScreenNames.HOME_STACK}
          component={HomeStack}
          initialParams={{ initialRoute: initialRouteParams }}
        />
      </Stack.Navigator>
    )
}

export default BaseModule
