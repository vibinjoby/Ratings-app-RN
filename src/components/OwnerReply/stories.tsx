import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StyleSheet, View } from 'react-native'

import OwnerReply from './component'

storiesOf('Components', module).add('OwnerReply', () => (
  <View style={styles.container}>
    <OwnerReply owner_reply="Hey sorry that we couldn't meet your expectations" />
  </View>
))

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
