import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'

import routes from './routes'
import { getData } from '../utilities/helpers'
import AuthStack from './AuthStack'
import CustomerHomeStack from './CustomerHomeStack'
import { RootState } from '../store'
import { loadUserInfo } from '../store/reducers/auth'

const RootStack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<any>(0)
  const userInfo = useSelector((state: RootState) => state.auth.userInfo)
  const Stack = createStackNavigator()
  const dispatch = useDispatch()

  const renderUserData = async () => {
    const data = await getData('userInfo')
    console.log('data', data)
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

  if (isLoggedIn === 0) {
    return <></>
  }

  return (
    <Stack.Navigator>
      {!isLoggedIn && (
        <>
          <Stack.Screen
            name={routes.AUTH_STACK}
            component={AuthStack}
            options={{ headerShown: false }}
          />
        </>
      )}
      {isLoggedIn && (
        <>
          {userInfo.typeOfUser === 'customer' ? (
            <>
              <Stack.Screen name={routes.CUSTOMER_HOME_STACK} component={CustomerHomeStack} />
              <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} />
            </>
          ) : (
            <>
              {/* <Stack.Screen
                name={routes.ADMIN_STACK_NAV}
                component={AdminStackNav}
                options={{ headerShown: false }}
              /> */}
              <Stack.Screen
                name={routes.AUTH_STACK}
                component={AuthStack}
                options={{ headerShown: false }}
              />
            </>
          )}
        </>
      )}
    </Stack.Navigator>
  )
}

export default RootStack
