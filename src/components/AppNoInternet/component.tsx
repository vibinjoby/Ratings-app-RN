import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, Modal, StatusBar, Text } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

import styles from './styles'

const AppNoInternet: React.FC = ({ children }: React.Props<any>) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [animationType, setAnimationType] = useState('fadeInDownBig')
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    checkConnectivity()
  }, [])

  const checkConnectivity = () => {
    NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected)
    })
  }

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

  if (!animationType) return null

  return (
    <>
      <StatusBar backgroundColor={modalVisible ? 'red' : 'grey'} />
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <Animatable.View animation={animationType} style={styles.animatableView}>
            <Text style={styles.internetTxt}>You are not connected to the Internet</Text>
          </Animatable.View>
        </View>
      </Modal>
      {children}
    </>
  )
}

export default AppNoInternet
