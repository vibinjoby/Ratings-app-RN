import React, { useEffect, useState } from 'react'
import { View, Modal, StatusBar, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

import styles from './styles'

interface AppNoInternetProps {
  isConnected: boolean
}

const AppNoInternet: React.FC<AppNoInternetProps> = ({ isConnected }: AppNoInternetProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [animationType, setAnimationType] = useState('fadeInDownBig')

  useEffect(() => {
    if (isConnected) {
      setAnimationType('fadeOutUpBig')
      // hide the modal after 2 seconds so that the banner's animation is rendered
      setTimeout(() => {
        setModalVisible(false)
      }, 500)
    } else {
      setModalVisible(true)
      setAnimationType('fadeInDownBig')
    }
  }, [isConnected])

  if (isConnected) return <></>

  return (
    <Modal transparent={true} visible={modalVisible}>
      <StatusBar backgroundColor={modalVisible ? 'red' : 'grey'} />
      <View style={styles.container}>
        <Animatable.View animation={animationType} style={styles.animatableView}>
          <Text style={styles.internetTxt}>You are not connected to the Internet</Text>
        </Animatable.View>
      </View>
    </Modal>
  )
}

export default AppNoInternet
