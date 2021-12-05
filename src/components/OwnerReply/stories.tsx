import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StyleSheet, View } from 'react-native'

import OwnerReply from './component'

export const Story = () => (
  <View style={styles.container}>
    <OwnerReply ownerReply="Hey sorry that we couldn't meet your expectations" />
  </View>
)

storiesOf('Components', module).add('OwnerReply', () => <Story />)

export default {
  title: 'OwnerReply',
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
