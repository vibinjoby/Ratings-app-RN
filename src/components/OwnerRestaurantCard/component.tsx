import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'
import constants from '../../configs/commonConst'
import Stars from '../Stars'
import Colors from '../../utilities/colors'

export interface OwnerRestaurantCardProps {
  id?: string
  title: string
  ratings: number
  reviewsCount: number
  onPress: () => void
}

const OwnerRestaurantCard: React.FC<OwnerRestaurantCardProps> = ({
  title,
  ratings,
  reviewsCount = 0,
  onPress,
}: OwnerRestaurantCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.7}>
      <Image style={styles.img} source={{ uri: constants.DUMMY_PIC }} />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.ratings}>{ratings}</Text>
        <Stars starHeight={10} selectedStars={ratings} selectedColor={Colors.appOrange} />
        <Text style={styles.reviews}>{reviewsCount} Reviews</Text>
      </View>
    </TouchableOpacity>
  )
}

export default OwnerRestaurantCard
