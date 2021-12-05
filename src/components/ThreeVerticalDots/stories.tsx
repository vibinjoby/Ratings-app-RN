import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import ThreeVerticalDots from './component'

export const Story = () => (
  <View style={styles.container}>
    <ThreeVerticalDots displayDatas={['Delete Review', 'Edit Response']} />
  </View>
)

storiesOf('Components', module).add('ThreeVerticalDots', () => <Story />)

export default {
  title: 'ThreeVerticalDots',
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
