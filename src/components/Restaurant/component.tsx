import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import commonConst from '../../configs/commonConst'
import Colors from '../../utilities/colors'
import Stars from '../Stars'
import styles from './styles'

export interface RestaurantProps {
  restaurantName: string
  ratings: number
  reviewsCount: number
  onPress: () => void
}

const Restaurant: React.FC<RestaurantProps> = ({
  restaurantName,
  ratings,
  onPress,
}: RestaurantProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: commonConst.DUMMY_PIC }} style={styles.imgBg} />
        <View>
          <Text style={styles.restaurantTitle} numberOfLines={1}>
            {restaurantName}
          </Text>
          <View style={styles.starContainer}>
            <Text style={styles.ratings}>{ratings}</Text>
            <Stars
              selectedColor={Colors.appOrange}
              selectable={false}
              selectedStars={ratings}
              starHeight={15}
            />
          </View>
          {/* <Text style={styles.reviews}>{reviewsCount} Reviews</Text> */}
        </View>
        <MaterialCommIcons
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
