import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import ThreeVerticalDots from './component'
import { StyleSheet } from 'react-native'

storiesOf('Components', module).add('ThreeVerticalDots', () => (
  <View style={styles.container}>
    <ThreeVerticalDots displayDatas={['Delete Review', 'Edit Response']} />
  </View>
))

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
