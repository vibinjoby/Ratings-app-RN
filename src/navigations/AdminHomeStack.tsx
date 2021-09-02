import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'

import routes from './routes'
import AdminHome from '../screens/AdminHome'
import AllUsers from '../screens/AllUsers'
import AllRestaurants from '../screens/AllRestaurants'
import Typography from '../utilities/typography'
import Colors from '../utilities/colors'
import AdminReviewDetail from '../screens/AdminReviewDetail'

const AdminHomeStack = () => {
  const Stack = createStackNavigator()

  const screenOptions = {
    headerShown: true,
    headerBackTitleVisible: false,
    headerTitleStyle: style.container,
    headerTintColor: Colors.black,
    headerStyle: style.navHeader,
  }

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routes.ADMIN_HOME} component={AdminHome} />
      <Stack.Screen name={routes.ALL_USERS} options={{ title: 'All Users' }} component={AllUsers} />
      <Stack.Screen
        name={routes.ALL_RESTAURANTS}
        options={{ title: 'All Restaurants' }}
        component={AllRestaurants}
      />
      <Stack.Screen
        name={routes.ALL_REVIEWS}
        component={AdminReviewDetail}
        options={{ title: 'All Reviews' }}
      />
    </Stack.Navigator>
  )
}

const style = StyleSheet.create({
  container: {
    ...Typography.BoldFont,
    fontSize: 22,
  },
  navHeader: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 6,
  },
})

export default AdminHomeStack
