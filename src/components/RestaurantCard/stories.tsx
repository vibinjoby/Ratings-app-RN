import React from 'react'
import { storiesOf } from '@storybook/react-native'
import RestaurantCard from './component'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

storiesOf('Components', module).add('RestaurantCard', () => (
  <View style={styles.container}>
    <RestaurantCard
      title="Joes Pizzeria"
      restaurantImg={require('../../assets/dummy-restaurant-pic.png')}
      ratings={4.4}
      reviewCount={84}
      onPress={() => console.log('pressed')}
    />
  </View>
))

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
