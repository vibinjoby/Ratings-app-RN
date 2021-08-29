import React from 'react'
import { StyleSheet, View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import RestaurantCard from './component'
import constants from '../../configs/commonConst'

storiesOf('Components', module).add('RestaurantCard', () => (
  <View style={styles.container}>
    <RestaurantCard
      id={'123'}
      title="Joes Pizzeria"
      restaurantImg={{ uri: constants.DUMMY_PIC }}
      ratings={4.4}
      reviewCount={84}
    />
  </View>
))

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
