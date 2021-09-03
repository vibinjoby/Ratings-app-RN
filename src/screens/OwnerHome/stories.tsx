import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OwnerHome from '.'
import { store } from '../../store'
import routes from '../../navigations/routes'

storiesOf('Screens', module).add('OwnerHome', () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name={routes.OWNER_HOME}
            component={OwnerHome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
})
