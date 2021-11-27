import React from 'react'
import { Text, View, Image } from 'react-native'

import styles from '../styles/RestaurantDetails'

export interface RatingsOverviewProps {
  ratings: number
}

const RatingsOverview = ({ ratings }: RatingsOverviewProps) => (
  <View style={styles.ratingOverview}>
    <Image style={styles.starImg} source={require('../../../assets/star/star.png')} />
    <Text style={styles.ratings}>{ratings}</Text>
  </View>
)

export default React.memo(RatingsOverview)
