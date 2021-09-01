import React from 'react'
import { storiesOf } from '@storybook/react-native'

import OwnerRestaurantCard from './component'

storiesOf('Components', module).add('OwnerRestaurantCard', () => (
  <OwnerRestaurantCard
    title={'Moxies Grill & Bar'}
    ratings={4.5}
    reviewsCount={4}
    onPress={() => console.log('pressed')}
  />
))
