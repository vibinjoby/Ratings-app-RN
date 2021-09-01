import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import ModalPopup from './component'
import Button from '../Button'

const Popup = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible((val) => !val)
  }

  return (
    <View style={styles.container}>
      <Button title="Show modal" onPress={toggleModal} />
      <ModalPopup
        isVisible={isModalVisible}
        content="Are you sure you want to delete this user"
        positiveBtnTxt="Yes"
        negativeBtnTxt="No"
        onPositiveBtnPress={() => console.log('positive btn pressed')}
        onNegativeBtnPress={toggleModal}
      />
    </View>
  )
}

storiesOf('Components', module).add('ModalPopup', () => <Popup />)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
