import React from 'react'
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Colors from '../../utilities/colors'
import Stars from '../Stars'
import styles from './styles'

export interface RestaurantCardProps {
  testID?: string
  title: string | undefined
  ratings: number | undefined
  restaurantImg: ImageSourcePropType
  reviewCount: number
  onPress: () => void
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  testID,
  title,
  ratings = 0,
  restaurantImg,
  reviewCount,
  onPress,
}: RestaurantCardProps) => {
  const RatingOverview = () => (
    <View style={styles.ratingWrapper}>
      <Image style={styles.starImg} source={require('../../assets/star/star.png')} />
      <Text testID="ratings" style={styles.ratings}>
        {ratings}
      </Text>
    </View>
  )

  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <View>
        <ImageBackground
          testID="imgBG"
          source={restaurantImg}
          resizeMode="stretch"
          style={styles.imgBg}
        >
          <RatingOverview />
        </ImageBackground>
        <Text testID="title" style={styles.restaurantTitle}>
          {title}
        </Text>
        <View style={styles.starContainer}>
          <Stars
            testID="stars"
            selectedColor={Colors.golden}
            selectable={false}
            selectedStars={ratings}
            starHeight={15}
          />
          <Text style={styles.reviews}>{reviewCount} Reviews</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
