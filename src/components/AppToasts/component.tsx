import React, { useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { resetToastMessage } from '../../store/reducers/common/toaster'
import styles from './styles'

const AppToasts: React.FC = ({ children }: React.Props<any>) => {
  const toaster = useSelector((state: RootState) => state.toaster)
  const [modalVisible, setModalVisible] = useState(true)
  const [animationType, setAnimationType] = useState('slideInRight')
  const dispatch = useDispatch()

  useEffect(() => {
    if (!toaster.toastMessage) return
    setModalVisible(true)
    // After 3 sec close the toast using timeout animation to right
    setTimeout(() => {
      hideToaster()
    }, 3000)
    setAnimationType('slideInRight')
  }, [toaster])

  const hideToaster = () => {
    setAnimationType('slideOutRight')
    setTimeout(() => {
      dispatch({ type: resetToastMessage.type })
      setModalVisible(false)
    }, 800)
  }

  if (!toaster?.toastMessage) return <>{children}</>

  return (
    <>
      {children}
      <Modal isVisible={modalVisible} onBackdropPress={hideToaster} backdropOpacity={0.3}>
        <Animatable.View animation={animationType} style={styles.animatableView}>
          <TouchableOpacity
            style={styles.centeredView}
            onPress={() => {
              setModalVisible(false)
            }}
          >
            <View style={[styles.modalView, !toaster.isSuccess && { borderLeftColor: 'red' }]}>
              <View style={styles.modalViewContent}>
                <Image
                  source={
                    toaster.isSuccess
                      ? require('../../assets/success-toasts.png')
                      : require('../../assets/error-toasts.png')
                  }
                  resizeMode="contain"
                  style={styles.toastImg}
                />
                <Text style={styles.modalText}>{toaster.toastMessage}</Text>
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
    </>
  )
}

export default AppToasts
