import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import AdminHome from '.'
import { store } from '../../store'
import routes from '../../navigations/routes'

storiesOf('Screens', module).add('AdminHome', () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name={routes.ADMIN_HOME}
            component={AdminHome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
})
