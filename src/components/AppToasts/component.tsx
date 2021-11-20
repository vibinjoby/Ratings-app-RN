import React, { useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Modal from 'react-native-modal'

import styles from './styles'

export interface AppToastsProps {
  isError: boolean
  toastMessage: string
}

const AppToasts = ({ isError = false, toastMessage }: AppToastsProps) => {
  const [modalVisible, setModalVisible] = useState(true)
  const [animationType, setAnimationType] = useState('slideInRight')

  useEffect(() => {
    setModalVisible(true)
    // After 3 sec close the toast using timeout animation to right
    setTimeout(() => {
      hideToaster()
    }, 3000)
    setAnimationType('slideInRight')
  }, [])

  const hideToaster = () => {
    setAnimationType('slideOutRight')
    setTimeout(() => {
      setModalVisible(false)
    }, 800)
  }

  return (
    <Modal isVisible={modalVisible} onBackdropPress={hideToaster} backdropOpacity={0.3}>
      <Animatable.View animation={animationType} style={styles.animatableView}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => {
            setModalVisible(false)
          }}
        >
          <View style={[styles.modalView, isError && styles.err]}>
            <View style={styles.modalViewContent}>
              <Image
                source={
                  !isError
                    ? require('../../assets/success-toasts.png')
                    : require('../../assets/error-toasts.png')
                }
                resizeMode="contain"
                style={styles.toastImg}
              />
              <Text style={styles.modalText}>{toastMessage}</Text>
              <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <Image
                  source={require('../../assets/close-toasts.png')}
                  resizeMode="contain"
                  style={styles.closeToast}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </Modal>
  )
}

export default AppToasts
