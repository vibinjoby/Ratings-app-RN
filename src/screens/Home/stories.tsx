import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'

import { store } from '../../store'
import Home from '.'
import routes from '../../navigations/routes'

storiesOf('Screens', module).add('Home', () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name={routes.CUSTOMER_HOME}
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
})
