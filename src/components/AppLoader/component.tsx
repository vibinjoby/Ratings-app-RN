import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'

import Colors from '../../utilities/colors'
import styles from './styles'

const AppLoader = () => {
  return (
    <Modal animationType="none" transparent visible={true}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalContainer}>
          <ActivityIndicator animating color={Colors.appOrange} size="large" />
        </View>
      </View>
    </Modal>
  )
}

export default AppLoader
