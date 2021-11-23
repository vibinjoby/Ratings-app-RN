import React from 'react'
import { Text, View, Image } from 'react-native'

import styles from '../styles/RestaurantDetails'

const RatingsOverview = () => (
  <View style={styles.ratingOverview}>
    <Image style={styles.starImg} source={require('../../../../assets/star/star.png')} />
    <Text style={styles.ratings}>{/* restaurantDetail.restaurantData.average_ratings */}</Text>
  </View>
)

export default React.memo(RatingsOverview)
