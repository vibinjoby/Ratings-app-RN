import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import Colors from '../../../../utilities/colors'
import styles from '../styles'

const ViewMore = () => (
  <View style={styles.footerSpacing}>
    <ActivityIndicator animating color={Colors.appOrange} size="large" />
  </View>
)

export default React.memo(ViewMore)
