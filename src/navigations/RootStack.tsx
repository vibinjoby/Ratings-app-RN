import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import routes from './routes'
import { getData } from '../utilities/helpers'
import AuthStack from './AuthStack'
/* import CustomerHomeStack from './CustomerHomeStack'
import OwnerHomeStack from './OwnerHomeStack'
import AdminHomeStack from './AdminHomeStack' */

const RootStack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<any>(0)
  /* const userInfo = useSelector((state: RootState) => state.auth.userInfo) */
  const Stack = createStackNavigator()

  const renderUserData = async () => {
    const data = await getData('userInfo')
    if (!data || !data.token) {
      return setIsLoggedIn(false)
    }
    if (data.userInfo?.typeOfUser === 'admin') {
      /* dispatch({
        type: loadAdminInfo.type,
        payload: {
          token: data.token,
        },
      }) */
    } else setIsLoggedIn(true)
    /* dispatch({
        type: loadUserInfo.type,
        payload: {
          token: data.token,
          userInfo: data.userInfo,
        },
      }) */
  }

  useEffect(() => {
    /* if (!userInfo.typeOfUser) {
      setIsLoggedIn(0)
    }
    renderUserData() */
  }, [])
  /* 
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
  } */

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.AUTH_STACK}
        component={AuthStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootStack
