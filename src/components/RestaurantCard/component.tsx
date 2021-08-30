import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import routes from '../../navigations/routes'

import Colors from '../../utilities/colors'
import Stars from '../Stars'
import styles from './styles'

export interface RestaurantCardProps {
  id: string
  title: string
  ratings: number
  restaurantImg: ImageSourcePropType
  reviewCount: number
  onPress?: () => void
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  title,
  ratings,
  restaurantImg,
  reviewCount,
  onPress,
}: RestaurantCardProps) => {
  const navigation = useNavigation()
  const RatingOverview = () => (
    <View style={styles.ratingWrapper}>
      <Image style={styles.starImg} source={require('../../assets/star/star.png')} />
      <Text style={styles.ratings}>{ratings}</Text>
    </View>
  )

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      //@ts-ignore
      onPress={() => (onPress ? onPress() : navigation.navigate(routes.RESTAURANT_DETAILS, { id }))}
    >
      <View>
        <ImageBackground source={restaurantImg} resizeMode="stretch" style={styles.imgBg}>
          <RatingOverview />
        </ImageBackground>
        <Text style={styles.restaurantTitle}>{title}</Text>
        <View style={styles.starContainer}>
          <Stars
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
