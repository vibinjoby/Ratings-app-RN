import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import commonConst from '../../configs/commonConst'
import Colors from '../../utilities/colors'
import Stars from '../AppStars'
import styles from './styles'

export interface RestaurantProps {
  testID?: string
  restaurantName?: string
  ratings?: number
  reviewsCount?: number
  onPress: () => void
}

const Restaurant: React.FC<RestaurantProps> = ({
  testID,
  restaurantName,
  ratings,
  reviewsCount,
  onPress,
}: RestaurantProps) => {
  return (
    <TouchableOpacity testID={testID} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: commonConst.DUMMY_PIC }} style={styles.imgBg} />
        <View>
          <Text testID="restaurantName" style={styles.restaurantTitle} numberOfLines={1}>
            {restaurantName}
          </Text>
          <View style={styles.starContainer}>
            <Text testID="ratings" style={styles.ratings}>
              {ratings}
            </Text>
            <Stars
              testID="stars"
              selectedColor={Colors.appOrange}
              selectable={false}
              selectedStars={ratings ?? 0}
              starHeight={15}
            />
          </View>
          <Text style={styles.reviews}>{reviewsCount} Reviews</Text>
        </View>
        <MaterialCommIcons
          testID="chevron"
          name="chevron-right"
          size={40}
          color={Colors.black}
          style={styles.chevron}
        />
      </View>
    </TouchableOpacity>
  )
}

export default Restaurant
