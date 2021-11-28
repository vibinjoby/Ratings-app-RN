import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import styles from '../styles'

export interface PlusIconProps {
  onPress: TouchableOpacityProps['onPress']
  testID: string
}

const PlusIcon = ({ onPress, testID }: PlusIconProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    testID={testID}
    style={styles.plusIcContainer}
    onPress={onPress}
  >
    <Text style={styles.plusTxt}>+</Text>
  </TouchableOpacity>
)

export default React.memo(PlusIcon)
