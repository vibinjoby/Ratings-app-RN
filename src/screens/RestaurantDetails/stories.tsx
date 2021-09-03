import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'

import RestaurantDetails from '.'
import { store } from '../../store'
import routes from '../../navigations/routes'

storiesOf('Screens', module).add('RestaurantDetails', () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name={routes.RESTAURANT_DETAILS}
            component={RestaurantDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
})
