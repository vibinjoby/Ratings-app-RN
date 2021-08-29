import React from 'react'
import { storiesOf } from '@storybook/react-native'

import RestaurantDetails from '.'
import constants from '../../configs/commonConst'
import { NavigationContainer } from '@react-navigation/native'

storiesOf('Screens', module).add('RestaurantDetails', () => (
  <NavigationContainer>
    <RestaurantDetails />
  </NavigationContainer>
))
