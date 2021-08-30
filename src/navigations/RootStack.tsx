import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'

import routes from './routes'
import { getData } from '../utilities/helpers'
import AuthStack from './AuthStack'
import CustomerHomeStack from './CustomerHomeStack'
import { RootState } from '../store'
import { loadUserInfo } from '../store/reducers/auth'
import OwnerHomeStack from './OwnerHomeStack'
import AdminHomeStack from './AdminHomeStack'

const RootStack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<any>(0)
  const userInfo = useSelector((state: RootState) => state.auth.userInfo)
  const Stack = createStackNavigator()
  const dispatch = useDispatch()

  const renderUserData = async () => {
    const data = await getData('userInfo')
    if (!data || !data.token) {
      return setIsLoggedIn(false)
    }
    dispatch({
      type: loadUserInfo.type,
      payload: {
        token: data.token,
        userInfo: data.userInfo,
      },
    })
    setIsLoggedIn(true)
  }

  useEffect(() => {
    if (!userInfo.typeOfUser) {
      setIsLoggedIn(0)
    }
    renderUserData()
  }, [])

  // This is when the user is already logged in
  const RenderScreenUserTypeBased = () => {
    // Customer navigation
    if (userInfo.typeOfUser === 'customer') {
      return (
        <>
          <Stack.Screen
            name={routes.CUSTOMER_HOME_STACK}
            component={CustomerHomeStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.AUTH_STACK}
            component={AuthStack}
            options={{ headerShown: false }}
          />
        </>
      )
    } else if (userInfo.typeOfUser === 'owner') {
      // Owners navigation
      return (
        <>
          <Stack.Screen
            name={routes.OWNER_HOME_STACK}
            component={OwnerHomeStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.AUTH_STACK}
            component={AuthStack}
            options={{ headerShown: false }}
          />
        </>
      )
    } else {
      // Admin navigation
      return (
        <>
          <Stack.Screen
            name={routes.ADMIN_HOME_STACK}
            component={AdminHomeStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.AUTH_STACK}
            component={AuthStack}
            options={{ headerShown: false }}
          />
        </>
      )
    }
  }

  if (isLoggedIn === 0) {
    return <></>
  }

  return (
    <Stack.Navigator>
      {!isLoggedIn && (
        <Stack.Screen
          name={routes.AUTH_STACK}
          component={AuthStack}
          options={{ headerShown: false }}
        />
      )}
      {isLoggedIn && RenderScreenUserTypeBased()}
    </Stack.Navigator>
  )
}

export default RootStack
