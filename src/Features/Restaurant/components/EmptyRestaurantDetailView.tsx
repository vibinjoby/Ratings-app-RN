import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import PlusIcon from '../../Home/owner/components/PlusIcon'
import RatingsOverview from './RatingsOverview'
import styles from '../styles/RestaurantDetails'

const EmptyRestaurantDetailView = () => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.headerBg}
      source={{ uri: 'https://source.unsplash.com/user/picoftasty' }}
    >
      <Text style={styles.restaurantTitle} numberOfLines={1} ellipsizeMode="tail">
        {/** @ts-ignore */}
        {restaurantDetail?.restaurantData.restaurant_name}
      </Text>
      <RatingsOverview />
    </ImageBackground>
    <View style={styles.noReviewWrapper}>
      <Text style={styles.noReviewTxt}>No Reviews yet!!</Text>
    </View>
    <PlusIcon onPress={() => {}} />
  </View>
)

export default React.memo(EmptyRestaurantDetailView)
