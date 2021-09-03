import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react-native'
import { createStackNavigator } from '@react-navigation/stack'

import OwnerReviewDetail from '.'
import { store } from '../../store'
import routes from '../../navigations/routes'

storiesOf('Screens', module).add('OwnerReviewDetail', () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name={routes.OWNER_REVIEW_DETAILS}
            component={OwnerReviewDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
})
