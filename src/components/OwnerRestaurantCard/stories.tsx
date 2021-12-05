import React from 'react'
import { storiesOf } from '@storybook/react-native'

import OwnerRestaurantCard from './component'

export const Story = () => (
  <OwnerRestaurantCard
    id={123}
    title={'Moxies Grill & Bar'}
    ratings={4.5}
    reviewsCount={4}
    onPress={() => console.log('pressed')}
  />
)

storiesOf('Components', module).add('OwnerRestaurantCard', () => <Story />)

export default {
  title: 'OwnerRestaurantCard',
}
