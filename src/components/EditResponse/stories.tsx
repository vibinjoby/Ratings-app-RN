import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import EditResponse from './component'
import Button from '../Button'

const Component = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleModal = () => {
    setIsVisible((val) => !val)
  }

  return (
    <View style={styles.container}>
      <Button title="Show modal" onPress={toggleModal} />
      <EditResponse
        isVisible={isVisible}
        customerResp="Lorem ipsium"
        ownerResp="Thanks for submitting your response but we dont value your time nor have interest to give you adequate feedback"
        onDismiss={toggleModal}
        onEdit={toggleModal}
        ratings={4}
      />
    </View>
  )
}

storiesOf('Components', module).add('EditResponse', () => <Component />)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
