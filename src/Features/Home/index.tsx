import React from 'react'
import { useRoute } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import AuthStack from '../Auth'
import AdminHome from './admin/containers'
import CustomerHome from './customer/containers/CustomerHome'
import OwnerHome from './owner/containers/OwnerHome'
import AddRestaurant from './owner/containers/AddRestaurant'
import { HomeRouteProps } from './types'
import { ScreenNames } from './constants'
import { ScreenNames as BaseModuleScreenNames } from '../../BaseModule/constants'

const HomeStack = () => {
  const route = useRoute<HomeRouteProps>()
  const screenOptions = {}
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={route.params?.initialRoute}>
      <Stack.Screen name={ScreenNames.CUSTOMER_HOME} component={CustomerHome} />
      <Stack.Screen name={ScreenNames.RESTAURANT_DETAILS} component={CustomerHome} />
      <Stack.Screen name={ScreenNames.ADMIN_HOME} component={AdminHome} />
      <Stack.Screen name={ScreenNames.OWNER_HOME} component={OwnerHome} />
      <Stack.Screen
        name={ScreenNames.ADD_RESTAURANT}
        component={AddRestaurant}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={BaseModuleScreenNames.AUTH_STACK}
        component={AuthStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
