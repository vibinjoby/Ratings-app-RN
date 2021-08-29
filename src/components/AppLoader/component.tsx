import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import Colors from '../../utilities/colors'
import styles from './styles'

const AppLoader = ({ children }: React.Props<any>) => {
  const loader = useSelector((state: RootState) => state.loader)
  if (!loader?.loading) return <>{children}</>

  return (
    <>
      {children}
      <Modal animationType="none" transparent visible={loader.loading}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <ActivityIndicator animating color={Colors.appOrange} size="large" />
          </View>
        </View>
      </Modal>
    </>
  )
}

export default AppLoader
