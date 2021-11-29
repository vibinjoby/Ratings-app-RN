import React from 'react'
import { useRoute } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import AuthStack from '../Auth'
import AdminHome from './admin/containers/AdminHome'
import AllUsers from './admin/containers/AllUsers'
import AllReviews from './admin/containers/AllReviews'
import AllRestaurants from './admin/containers/AllRestaurants'
import CustomerHome from './customer/containers/CustomerHome'
import RestaurantDetailsNav from '../Restaurant'
import OwnerHome from './owner/containers/OwnerHome'
import AddRestaurant from './owner/containers/AddRestaurant'
import { HomeRouteProps } from './types'
import { ScreenNames } from './constants'
import { ScreenNames as BaseModuleScreenNames } from '../../BaseModule/constants'
import styles from '../../components/CustomNavBar/styles'

const screenOptions = {
  headerStyle: styles.navHeader,
  headerTintColor: 'black',
  headerBackTitleVisible: false,
}

const HomeStack = () => {
  const route = useRoute<HomeRouteProps>()
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName={route.params?.initialRoute} screenOptions={screenOptions}>
      <Stack.Screen name={ScreenNames.CUSTOMER_HOME} component={CustomerHome} />
      <Stack.Screen name={ScreenNames.ADMIN_HOME} component={AdminHome} />
      <Stack.Screen
        name={ScreenNames.ALL_USERS}
        component={AllUsers}
        options={{ title: 'All Users' }}
      />
      <Stack.Screen
        name={ScreenNames.ALL_RESTAURANTS}
        component={AllRestaurants}
        options={{ title: 'All Restaurants' }}
      />
      <Stack.Screen
        name={ScreenNames.ALL_REVIEWS}
        component={AllReviews}
        options={{ title: 'All Reviews' }}
      />
      <Stack.Screen name={ScreenNames.OWNER_HOME} component={OwnerHome} />
      <Stack.Screen
        name={ScreenNames.RESTAURANT_DETAILS_NAV}
        options={{ headerShown: false }}
        component={RestaurantDetailsNav}
      />

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
