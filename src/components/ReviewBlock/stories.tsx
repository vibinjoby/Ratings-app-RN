import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import ReviewBlock from './component'

export const Story = () => (
  <View style={styles.container}>
    <ReviewBlock
      reviewId={123}
      reviewerName="Vibin"
      comments="This is not too bad at all"
      ratings={3}
      visitDate="20 Jun 2021"
      shouldReply
    />
  </View>
)

storiesOf('Components', module).add('ReviewBlock', () => <Story />)

export default {
  title: 'ReviewBlock',
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
