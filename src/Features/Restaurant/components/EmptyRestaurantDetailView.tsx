import React from 'react'
import { Text, TouchableOpacityProps, View } from 'react-native'

import PlusIcon from '../../Home/owner/components/PlusIcon'
import styles from '../styles/RestaurantDetails'

interface EmptyRestaurantDetailProps {
  onAdd?: TouchableOpacityProps['onPress']
}

const EmptyRestaurantDetailView = ({ onAdd }: EmptyRestaurantDetailProps) => (
  <View style={styles.contentContainer}>
    <View style={styles.noReviewWrapper}>
      <Text style={styles.noReviewTxt}>No Reviews yet!!</Text>
    </View>
    {onAdd ? <PlusIcon onPress={onAdd} /> : null}
  </View>
)

export default React.memo(EmptyRestaurantDetailView)
