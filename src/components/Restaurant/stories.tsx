import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Restaurant from './component'

storiesOf('Components', module).add('Restaurant', () => (
  <View style={styles.container}>
    <Restaurant
      restaurantName="California Roll"
      ratings={4.5}
      reviewsCount={15}
      onPress={() => console.log('pressed')}
    />
  </View>
))
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
