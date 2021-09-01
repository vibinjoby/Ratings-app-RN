import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View, StyleSheet } from 'react-native'

import ReplyReview from './component'

storiesOf('Components', module).add('ReplyReview', () => (
  <View style={styles.container}>
    <ReplyReview _id="123" onSend={() => console.log('send')} />
  </View>
))

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
