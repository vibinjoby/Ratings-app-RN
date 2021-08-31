import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import ReviewBlock from './component'

storiesOf('Components', module).add('ReviewBlock', () => (
  <View style={styles.container}>
    <ReviewBlock
      reviewId="123"
      reviewerName="Vibin"
      comments="This is not too bad at all"
      ratings={3}
      visitDate="20 Jun 2021"
      shouldReply
    />
  </View>
))

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
