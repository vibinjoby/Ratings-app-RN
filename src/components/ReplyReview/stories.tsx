import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View, StyleSheet } from 'react-native'

import ReplyReview from './component'

export const Story = () => (
  <View style={styles.container}>
    <ReplyReview _id={123} onSend={() => console.log('send')} />
  </View>
)

storiesOf('Components', module).add('ReplyReview', () => <Story />)

export default {
  title: 'ReplyReview',
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
