import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import styles from '../styles'

export interface PlusIconProps {
  onPress: TouchableOpacityProps['onPress']
}

const PlusIcon = ({ onPress }: PlusIconProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    testID="addRestaurant"
    style={styles.plusIcContainer}
    onPress={onPress}
  >
    <Text style={styles.plusTxt}>+</Text>
  </TouchableOpacity>
)

export default React.memo(PlusIcon)
