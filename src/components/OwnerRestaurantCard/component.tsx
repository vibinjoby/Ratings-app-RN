import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'
import constants from '../../configs/commonConst'
import Stars from '../Stars'
import Colors from '../../utilities/colors'

export interface OwnerRestaurantCardProps {
  testID?: string
  id: number
  title: string
  ratings: number
  reviewsCount: number
  onPress: (id: number) => void
}

const OwnerRestaurantCard: React.FC<OwnerRestaurantCardProps> = ({
  id,
  testID,
  title,
  ratings,
  reviewsCount = 0,
  onPress,
}: OwnerRestaurantCardProps) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={() => onPress(id)}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Image style={styles.img} source={{ uri: constants.DUMMY_PIC }} />
      <Text testID="title" style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.footer}>
        <Text testID="ratings" style={styles.ratings}>
          {ratings}
        </Text>
        <Stars
          testID="stars"
          starHeight={10}
          selectedStars={ratings}
          selectedColor={Colors.appOrange}
        />
        <Text testID="reviewsCount" style={styles.reviews}>
          {reviewsCount} Reviews
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default OwnerRestaurantCard
