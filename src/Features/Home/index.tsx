import React from 'react'
import { Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CustomerHome from './customer/containers'
import AdminHome from './admin/containers'
import OwnerHome from './owner/containers'
import { ScreenNames } from './constants'
import { ScreenNames as BaseModuleScreenNames } from '../../BaseModule/constants'
import styles from './owner/styles'
import { HomeRouteProps } from './types'
import AuthStack from '../Auth'
import userInfoVars from '../../store'

const HomeStack = () => {
  const { userInfo } = userInfoVars()
  const route = useRoute<HomeRouteProps>()
  const screenOptions = {
    title: '',
    headerLeft: () => <Text style={styles.customerSalutation}>Welcome {userInfo?.name}</Text>,
    headerStyle: styles.navHeader,
  }
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={route.params?.initialRoute}>
      <Stack.Screen name={ScreenNames.CUSTOMER_HOME} component={CustomerHome} />
      <Stack.Screen name={ScreenNames.ADMIN_HOME} component={AdminHome} />
      <Stack.Screen name={ScreenNames.OWNER_HOME} component={OwnerHome} />
      <Stack.Screen
        name={BaseModuleScreenNames.AUTH_STACK}
        component={AuthStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
